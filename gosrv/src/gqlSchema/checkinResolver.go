package gqlSchema

import (
  "context"
  
  "X/gosrv/src/helper"
  "X/gosrv/src/authorization"
)

func (r *Resolver) CheckinDetail(ctx context.Context, args *struct{Pin string}) *sessionDetailResolver {
  jwtPayload := ctx.Value("JWT").(authorization.JWTPayload)
  c := helper.ContextDetail {
      Ctx: ctx.Value("GAE").(context.Context),
      FunctionName: "Checkin Resolver",
      TranID: jwtPayload.Txn,
      UID: jwtPayload.Sub,
      CID: jwtPayload.CID,
      ProductID: "",
  }     
  
  helper.Log(c, "info", "Started")

  if args.Pin != "123456" {
    helper.Log(c, "info", "Pin entry check", "UID", c.UID)
    return &sessionDetailResolver{"00000000000000000000000000", "", 0, false}
  }
  //sID := value[2]
  sID := jwtPayload.Sid
  eXP := int32(0)
  isRefresh := false
  if sID == "" {
    helper.Log(c, "info", "Check for session", "sID", "No Session Found")
    sID = "not_valid"
  }

  if sID != "not_valid"  {
    eXP, isRefresh = authorization.CalculateEXP(sID)
  } else {
    c.UID = "00000000000000000000000001"
    newJWTToken := authorization.CreateJWTSession(c)
    sID = newJWTToken.Sid
    helper.Log(c, "info", "Created new session", "sID", sID)
    eXP, isRefresh = authorization.CalculateEXP(sID)
  }

 
  helper.Log(c, "info", "Completed")
  return &sessionDetailResolver{c.UID, sID, eXP, isRefresh}
}
