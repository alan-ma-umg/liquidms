package authentication

import (
  "os"
  "time"
  "context"
  "strconv"
  "net/http"

  "X/gosrv/src/helper"
  "X/gosrv/src/authorization"
)

//var jwtRefreshMin, _ = strconv.ParseInt(os.Getenv("JWT_REFRESH_MIN"),10, 64)
//var RefreshTime = int64(60 * jwtRefreshMin)

func getJWTRefreshSec() int64 {
  jwtRefreshSec, _ := strconv.ParseInt(os.Getenv("JWT_REFRESH_SEC"),10, 64)
  if jwtRefreshSec == 0 {
    return 60
  } else {
    return jwtRefreshSec
  }
}

func AuthnCheck(next http.Handler) http.Handler {
  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    
  c := helper.ContextDetail {
    Ctx: r.Context(),
    FunctionName: "Authentication Check",
    TranID: helper.GenerateTranID(),
    UID: "00000000000000000000000000",
    CID: "00000000000000000000000000",
    ProductID: "",
  }
  helper.Log(c, "info", "Start")

  // Get Cookie if Exist    
  var authnType, authnToken string

  authnType, authnToken = getAuthnCookies(r, c)

  helper.Log(c, "info", "AuthnCookie", "authnType", authnType)

  if authnType == "Google" {
    googleTokenInfo := googleAuthnHandler(c, authnToken)

     helper.Log(c, "info", "Google Token Verified")
    if googleTokenInfo != nil {
      helper.Log(c, "info", "Google Token is not NIL")
      var err error
      c.UID, err = GoogleTokenHandler(c, *googleTokenInfo)
      helper.Log(c, "info", "Verify User", "authnType", authnType)        
      if err != nil {
         helper.Log(c, "error", "Create Account with Token Type", "authnType", authnType, "error", err.Error()) 
      }
    } else {
      helper.Log(c, "info", "Google Token is NIL")
    }
    
    if c.UID != "" {
      jwtToken := authorization.CreateJWTSession(c)
      next.ServeHTTP(w, requestWithAppengineContext(r, c.Ctx, jwtToken))
    } else {
      next.ServeHTTP(w, requestWithAppengineContext(r, c.Ctx, *authorization.NullJWTPayload))
    }
    
  } else if authnType == "Session" {
	  helper.Log(c, "info", "Session Token Check")
    // sessionToken = authToken
    jwtPayload, err := authorization.ValidateJWTSession(c, authnToken)
    
    if err != nil {
      helper.Log(c, "error", "Session Token Check", "error", err.Error()) 
		} else {
		  helper.Log(c, "debug", "Session Token Check", "jwtPayload", jwtPayload.Aud) 
		  c.UID = jwtPayload.Sub
		}
		
		currentTimeInUnix := time.Now().Unix()
		
		tokenAge := currentTimeInUnix - jwtPayload.Iat
    jwtRefreshSec := getJWTRefreshSec()
    helper.Log(c, "debug", "Check Token Age", "tokenAge", strconv.FormatInt(tokenAge, 10)) 

    if tokenAge > jwtRefreshSec {
      helper.Log(c, "debug", "Refresh Token Triggered") 
      // sessionToken = RefreshJWTSession(c, jwtPayload.Aud, jwtPayload.Jti)
      jwtPayload, err = authorization.RefreshJWTSession(c, jwtPayload.Aud, jwtPayload.Jti)
      if err != nil {
        helper.Log(c, "error", "JWT Refresh", "error", err.Error())
      }
    }
    next.ServeHTTP(w, requestWithAppengineContext(r, c.Ctx, jwtPayload))
    
  } else {
    next.ServeHTTP(w, requestWithAppengineContext(r, c.Ctx, *authorization.NullJWTPayload))
  }
    
  })
}

func getAuthnCookies(r *http.Request, c helper.ContextDetail) (string, string) {
  authnTypeCookie, err := r.Cookie("authType")

  if err != nil {
    helper.Log(c, "warning", "Get AuthnType Cookie", "error", err.Error())
    return "", ""
  } else {
    authnTokenCookie, err := r.Cookie("authToken")

    if err != nil {
      helper.Log(c, "warning", "Get AuthnToken Cookie", "error", err.Error())
      return "", ""
    } else {
      return authnTypeCookie.Value, authnTokenCookie.Value
    }
  }
}

func googleAuthnHandler(c helper.ContextDetail, authnToken string) *GoogleTokenInfo {
  gCloudAud := os.Getenv("GCLOUD_AUD")
  if gCloudAud == "" {
    gCloudAud = "466898721997-2sp2u49s9jdehqprujtbuclnib8ug6re.apps.googleusercontent.com"
  }
  
  certInfo, err :=  GetGoogleCerts(c.Ctx)

  if err != nil {
    helper.Log(c, "error", "Get Google Cert", "error", err.Error())
    return nil
  }

  
  if certInfo == nil {
    helper.Log(c, "warning", "Check Cert Info", "error", "Google Cert Not Found")
    return nil
  } else {
    helper.Log(c, "info", "Verifying Google Token")
    googleTokenInfo, err := VerifyGoogleIDToken(authnToken, certInfo, gCloudAud)	
    
    if err != nil{
      helper.Log(c, "error", "Validate GoogleID Token", "error", err.Error())  
    }
    return googleTokenInfo  
  }
}

func requestWithAppengineContext(r *http.Request, c context.Context, jwtToken authorization.JWTPayload ) *http.Request {
	ctx := context.WithValue(r.Context(), "GAE", c)
	return r.WithContext(context.WithValue(ctx, "JWT", jwtToken))
}