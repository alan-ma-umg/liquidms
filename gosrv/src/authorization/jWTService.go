package authorization

import (
  "strings"
  "errors"
  "encoding/json"
  "math/rand"
  "time"
  
  "X/gosrv/src/helper"
)

func CreateJWTSession(c helper.ContextDetail) (JWTPayload) {
  rand.Seed(time.Now().UnixNano())

  a := make([]byte, 32)
  _, _ = rand.Read(a)

  b := make([]byte, 32)
  _, _ = rand.Read(b)

  audToken := Base64Encode(a)
  jtiToken := Base64Encode(b)
  jwtDurationSec := GetJWTDurationSec();

  currentTimeInUnix := time.Now().Unix()
  expireTimeInUnix := currentTimeInUnix + jwtDurationSec
  
  /*
  helper.Log(c, "info", "Loading site grant by UID", "uid", c.UID)
  userSites, loadGrantErr := model.LoadGrantDetailsByActor(c.Ctx, c.UID, "site")
  if loadGrantErr != nil {
      helper.Log(c, "error", "Error loading user site", "uid", c.UID, "error", loadGrantErr.Error())
  }
  
  if len(*userSites) > 1 {
      helper.Log(c, "error", "Multiple User Sites Found", "uid", c.UID)
  }
    
  var userSiteID string
  var userSiteGrant string
  
  if (*userSites)[0].ItemID == "" {
    helper.Log(c, "info", "No site grants found for user", "uid", c.UID)
    userSiteID = "00000000000000000000000000"
    userSiteGrant = "none"
  } else {
    helper.Log(c, "info", "Site grant set for user", "site", (*userSites)[0].ItemID, "grant", (*userSites)[0].Grant)
    userSiteID = (*userSites)[0].ItemID
    userSiteGrant = (*userSites)[0].Grant
  }
  
  
  scopePayload := &[]model.ScopePayload {
      {
        Scope: "site",
        Access: userSiteGrant,
      },
      {
        Scope:"checkin",
        Access:"read",
      },
      {
        Scope:"group",
        Access:"write",
      },
  }
  
  authPayload := &model.AuthPayload {
    SiteID: userSiteID,
    Scopes: *scopePayload,
  }
  */

  jwtPayload := &JWTPayload {
    Sub: c.UID,
    Aud: audToken,
    Jti: jtiToken,
    Iat: currentTimeInUnix,
    Exp: expireTimeInUnix,
    Txn: c.TranID,
    Sid: "",
    Scope: nil,
    CID: c.CID,
  }

  saveError := SaveJWTPayload(c.Ctx, jwtPayload.Aud, jwtPayload)

  if saveError != nil {
    helper.Log(c, "error", "Saving JWTSession", "aud", jwtPayload.Aud, "error", saveError.Error())
  }

  jwtPayload.Sid = SignJWTToken(*jwtPayload)

  
  helper.Log(c, "info", "exited")    

  return *jwtPayload
}

func RefreshJWTSession(c helper.ContextDetail, aud string, jti string) (JWTPayload, error) {
  c.FunctionName = "RefreshJWTSession"
  helper.Log(c, "info", "Stated") 

  jwtPayload, loadError := LoadJWTPayload(c.Ctx, aud)
  currentTimeInUnix := time.Now().Unix()
  jwtDurationSec := GetJWTDurationSec();
  
  if loadError != nil {
    return *NullJWTPayload, loadError
  }

  if jwtPayload.Jti != jti {        
    if jwtPayload.Exp >= currentTimeInUnix + (jwtDurationSec - 2)  {
      err := errors.New("JWT just refreshed")
      return *jwtPayload, err
    } else {
      err := errors.New("JTI Mismatch")
      helper.Log(c, "error", "JTI check fails", "aud", jwtPayload.Aud, "error", err.Error())
      return *NullJWTPayload, err      
    }
  }

  b := make([]byte, 32)
  _, _ = rand.Read(b)

  jwtPayload.Jti = Base64Encode(b)

  expireTimeInUnix := currentTimeInUnix + jwtDurationSec

  jwtPayload.Iat = currentTimeInUnix
  jwtPayload.Exp = expireTimeInUnix

  saveError := SaveJWTPayload(c.Ctx, jwtPayload.Aud, jwtPayload)

  if saveError != nil {
    helper.Log(c, "error", "Saving JWTSession", "aud", jwtPayload.Aud, "error", saveError.Error())
  }

  jwtPayload.Sid = SignJWTToken(*jwtPayload)
  helper.Log(c, "info", "Completed") 
  return *jwtPayload, nil
}

func ValidateJWTSession(c helper.ContextDetail, sessionToken string) (JWTPayload, error) {    
  token := strings.Split(sessionToken, ".")

  header := JWTHeader{}

  if len(token) != 3 {
    splitErr := errors.New("Invalid JWT token")
    return *NullJWTPayload, splitErr
  }

  encodedHeader, errHeader := Base64Decode(token[0])
  errHeader = json.Unmarshal([]byte(encodedHeader), &header)

  if errHeader != nil {
    errHeader := errors.New("Invalid Header in JWT token")
    return *NullJWTPayload, errHeader
  }

  if header.Typ != "JWT" {return *NullJWTPayload, errors.New("Invalid token type, only JWT allowed")}
  if header.Alg != "HS256" {return *NullJWTPayload, errors.New("Invalid algorithm type, only HS256 allowed")}    

  payload, errDecode := DecodeJWTToken(token[1])

  if errDecode != nil {
    return  *NullJWTPayload, errDecode
  }

  currentTimeInUnix := time.Now().Unix()

  if currentTimeInUnix > payload.Exp {return *NullJWTPayload, errors.New("Token is expired")}

  isValidated := CompareHmac(token[2], token[0] + "." + token[1])            

  if isValidated {
    payload.Sid = sessionToken
    return payload, nil
  } else {
    err := errors.New("Invalid JWT token")
    return *NullJWTPayload, err
  }
}