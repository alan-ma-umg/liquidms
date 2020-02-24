package gqlSchema

import (
  "context"
  
  "X/gosrv/src/authorization"
  "X/gosrv/src/helper"
)


func (r *Resolver) Health(ctx context.Context) (*healthDetailResolver) {
  jwtPayload := ctx.Value("JWT").(authorization.JWTPayload)
  c := helper.ContextDetail {
      Ctx: ctx.Value("GAE").(context.Context),
      FunctionName: "Health Resolver",
      TranID: jwtPayload.Txn,
      UID: jwtPayload.Sub,
      CID: jwtPayload.CID,
      ProductID: "",
  }  
  helper.Log(c, "info", "Started")
  
  return &healthDetailResolver{"ok", c.UID, c.CID}
}

type healthDetailResolver struct {
  status string
  uid    string
  cid    string
}

func (r *healthDetailResolver) Status() string {
  return r.status
}

func (r *healthDetailResolver) UID() string {
  return r.uid
}

func (r *healthDetailResolver) CID() string {
  return r.cid
}