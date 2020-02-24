package authorization

import (
  "context"
  "cloud.google.com/go/datastore"
)

type JWTPayload struct {
  Sub         string          `json:"sub"`        //subject (user id)
  Aud         string          `json:"aud"`        //audience (client id)
  Jti         string          `json:"jti"`        //jwt id
  Iat         int64           `json:"iat"`        //issue at time
  Exp         int64           `json:"exp"`        //expiration time
  Txn         string          `json:"txn"`        //transaction id
  Sid         string          `json:"sid"`        //sessionid
  Scope       []string        `json:"scope"`      //metadata
  CID         string          `json:"client_id"`  //client identifier
}

/*
type AuthzPayload struct {
  SiteID        string          `json:"siteId"`
  Subdomain     string          `json:"subdomain"`        
  Scopes        []ScopePayload  `json:"scopes"`
  UID           string          `json:"uId"`
  TranID        string          `json:"tranId"`
  SessionID     string          `json:"sId"`  
}

type ScopePayload struct {
  Scope   string  `json:"scope"`
  Access  string  `json:"access"`
}

var NullAuthPayload = &AuthPayload {
  SiteID: "",
  Scopes: nil,
}
*/

var NullJWTPayload = &JWTPayload {
  Sub: "",
  Aud: "",
  Jti: "",
  Iat: int64(0),
  Exp: int64(0),
  Txn: "",
  Sid: "",
  Scope: nil,
  CID: "",
}

func SaveJWTPayload(ctx context.Context, indexKey string, saveRecord *JWTPayload) error {
  dsClient, err := datastore.NewClient(ctx, "liquidms")
  if err != nil {
		return err
	}
  defer dsClient.Close()
  
  dbKind := "JWTPayloadDetail"

  key := datastore.NameKey(dbKind, indexKey, nil)
  if _, err := dsClient.Put(ctx, key, saveRecord); err != nil {
    return err
  }
  return nil
}

func LoadJWTPayload(ctx context.Context, indexKey string) (*JWTPayload, error) {
  dsClient, err := datastore.NewClient(ctx, "liquidms")
  if err != nil {
		return NullJWTPayload, err
	}
  defer dsClient.Close()
  
  dbKind := "JWTPayloadDetail"
  key := datastore.NameKey(dbKind, indexKey, nil)
  
  e := new(JWTPayload)
  if err := dsClient.Get(ctx, key, e); err != nil{
    return NullJWTPayload, err
  }

  return e, nil
}