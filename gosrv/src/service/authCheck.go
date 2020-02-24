package service

import (
  "os"
//  "time"
  "log"
  "context"
  "strconv"
  "net/http"

  "X/gosrv/src/helper"
)

var jwtRefreshMin, _ = strconv.ParseInt(os.Getenv("JWT_REFRESH_MIN"),10, 64)
var RefreshTime = int64(60 * jwtRefreshMin)

func AuthnCheck(next http.Handler) http.Handler {
  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        
    c := helper.ContextDetail {
      Ctx: r.Context(),
      FunctionName: "AuthorizationCheck",
      TranID: helper.GenerateTranID(),
      UID: "00000000000000000000000000",
      ProductID: "",
    }
    helper.Log(c, "info", "Started")
    
    // Get Cookie Value
    
    var authType, authToken string
    
    authTypeCookie, err := r.Cookie("authType")

    if err != nil {
      helper.Log(c, "error", "AuthType Cookie Check", "error", err.Error())
    } else {
      authTokenCookie, err := r.Cookie("authToken")
    
      if err != nil {
        helper.Log(c, "error", "AuthToken Cookie Check", "error", err.Error())
      } else {
        authType = authTypeCookie.Value
        authToken = authTokenCookie.Value
        log.Println(authType)
        log.Println(authToken)
        helper.Log(c, "info", "Cookie Data", "authType", authType, "authToken", authToken)
      }
    }

    
        
    
  next.ServeHTTP(w, requestWithAppengineContext(r, c.Ctx, ""))
  })
}

func requestWithAppengineContext(r *http.Request, c context.Context, auth string ) *http.Request {
	ctx := context.WithValue(r.Context(), "GAE", c)
	return r.WithContext(context.WithValue(ctx, "AUTH", auth))
}