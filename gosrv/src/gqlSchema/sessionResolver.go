package gqlSchema

import (
  "context"
  
  "X/gosrv/src/helper"
  "X/gosrv/src/authorization"
)

func (r *Resolver) SessionDetail(ctx context.Context) *sessionDetailResolver {
  jwtPayload := ctx.Value("JWT").(authorization.JWTPayload)
  c := helper.ContextDetail {
      Ctx: ctx.Value("GAE").(context.Context),
      FunctionName: "Session Resolver",
      TranID: jwtPayload.Txn,
      UID: jwtPayload.Sub,
      CID: jwtPayload.CID,
      ProductID: "",
  }     
  
  helper.Log(c, "info", "Started")
  
  //sID := value[2]
  sID := jwtPayload.Sid
  eXP := int32(0)
  isRefresh := false
  if sID == "" {
    helper.Log(c, "info", "Session Detail", "error", "No Session")
    sID = "not_valid"
  }

  
  if sID != "not_valid"  {
    eXP, isRefresh = authorization.CalculateEXP(sID)
  }

  helper.Log(c, "info", "Completed")
  return &sessionDetailResolver{c.UID, sID, eXP, isRefresh}
}

type sessionDetailResolver struct {
  uID string
  sID string
  eXP int32
  isRefresh bool
}

func (r *sessionDetailResolver) SessionToken() string {
  if r.uID == "00000000000000000000000000" {
    return ""
  } else {
    return r.sID
  }
}

func (r *sessionDetailResolver) UserID() string {
  if r.uID == "00000000000000000000000000" {
    return ""
  } else {
    return r.uID
  }
}

func (r *sessionDetailResolver) Status() string {
  if (r.uID == "00000000000000000000000000" || r.uID == "") {
    return "Unauthorized"  
  } else {
    if r.isRefresh {
      return "Refresh"
    } else {
      return "Authorized"
    }
  }
}

func (r *sessionDetailResolver) Expiration() int32 {
  if r.uID == "00000000000000000000000000" {
    return int32(0)
  } else {
    return r.eXP
  }
}

func (r *sessionDetailResolver) CheckinID() string {
  if r.uID == "00000000000000000000000001" {
    return "00000000000000000000000000"
  } else {
    return ""
  }
}