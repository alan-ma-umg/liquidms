package main

import (
  "os"
  "log"
  "time"
  "net/http"
  //"encoding/json"
  "path/filepath"
  "github.com/gorilla/mux"
  "github.com/etherlabsio/healthcheck"
)

type spaHandler struct {
	staticPath string
	indexPath  string
}

func (h spaHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
  
  log.Println(r.URL.Path)
  // get the absolute path to prevent directory traversal
	path, err := filepath.Abs(r.URL.Path)
  log.Println(path);
  
	if err != nil {
    log.Println("error getting absolute path")
        // if we failed to get the absolute path respond with a 400 bad request
        // and stop
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

  // prepend the path with the path to the static directory
	path = filepath.Join(h.staticPath, path)

  // check whether a file exists at the given path
	_, err = os.Stat(path)
	if os.IsNotExist(err) {
    log.Println("file does not exist, serving index.html")
	// file does not exist, serve index.html
		http.ServeFile(w, r, filepath.Join(h.staticPath, h.indexPath))
		return
	} else if err != nil {
    log.Println("error with file")
        // if we got an error (that wasn't that the file doesn't exist) stating the
        // file, return a 500 internal server error and stop
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

   // otherwise, use http.FileServer to serve the static dir
	http.FileServer(http.Dir(h.staticPath)).ServeHTTP(w, r)
}

func main() {
  r := mux.NewRouter()
  
  r.Handle("/_ah/warmup", healthcheck.Handler(
    healthcheck.WithTimeout(5*time.Second),
  ))
  
  ngapp := spaHandler{staticPath: "./gosrv/dist/spaapp", indexPath: "index.html"}
  
  r.PathPrefix("/").Handler(ngapp)
  
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
		log.Printf("Defaulting to port %s", port)
	}

	srv := &http.Server{
		Handler: r,
    Addr:    "0.0.0.0:" + port,
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 30 * time.Second,
		ReadTimeout:  30 * time.Second,
	}
  
	log.Printf("Listening on port %s", port)
	log.Fatal(srv.ListenAndServe())
}
