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
  graphql "github.com/graph-gophers/graphql-go"
  "github.com/graph-gophers/graphql-go/relay"
  
  "X/gosrv/src/gqlSchema"
  "X/gosrv/src/authentication"
)

type spaHandler struct {
	staticPath string
	indexPath  string
}

var schema *graphql.Schema

func (h spaHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {  
  // get the absolute path to prevent directory traversal
  log.Println("Serve HTTP URL: ", r.URL.Path)

  path, err := filepath.Abs(r.URL.Path)
  
	if err != nil {
    log.Println("error getting absolute path")
        // if we failed to get the absolute path respond with a 400 bad request
        // and stop
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

  // prepend the path with the path to the static directory
	path = filepath.Join(h.staticPath, path)
  
  log.Println("file path: ", path)
  // check whether a file exists at the given path
	_, err = os.Stat(path)
  
	if os.IsNotExist(err) {
	// file does not exist, serve index.html
    log.Println("file not found, serving default file", h.indexPath)
    http.ServeFile(w, r, filepath.Join(h.staticPath, h.indexPath))
		return
	} else if err != nil {
    log.Println("error checking for path")
        // if we got an error (that wasn't that the file doesn't exist) stating the
        // file, return a 500 internal server error and stop
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
  }
   // otherwise, use http.FileServer to serve the static dir
	http.FileServer(http.Dir(h.staticPath)).ServeHTTP(w, r)
}

func main() {
  schema = graphql.MustParseSchema(gqlSchema.Schema, &gqlSchema.Resolver{})

  ngapp := spaHandler{staticPath: "gosrv/dist/spaapp", indexPath: "index.html"}
  giqlapp := spaHandler{staticPath: "gosrv/dist", indexPath: "index.html"}

  r := mux.NewRouter()
  
  r.Handle("/_ah/warmup", healthcheck.Handler(
    healthcheck.WithTimeout(5*time.Second),
  ))
  r.Handle("/query", authentication.AuthnCheck(&relay.Handler{Schema: schema}))  
  
  r.PathPrefix("/graphiql").Handler(giqlapp)
  r.PathPrefix("/").Handler(ngapp)
  
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
    log.Println("Setting to default port: ", port)
	}

  address := os.Getenv("ADDRESS")
  if address == "" {
    address = "0.0.0.0"
    log.Println("Setting to default address: ", address)
  }
  
	srv := &http.Server{
		Handler: r,
    Addr: address + ":" + port,
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 30 * time.Second,
		ReadTimeout:  30 * time.Second,
	}
  
	log.Printf("Listening on port %s", port)
	log.Fatal(srv.ListenAndServe())
}
