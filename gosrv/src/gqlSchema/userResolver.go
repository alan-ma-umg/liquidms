package gqlSchema

import (
  "context"
  
  "X/gosrv/src/helper"
  "X/gosrv/src/authentication"
  "X/gosrv/src/authorization"
)

type favContextKey string

func (r *Resolver) GetUser(ctx context.Context) (*userDetailResolver, error) {
  jwtPayload := ctx.Value("JWT").(authorization.JWTPayload)
  c := helper.ContextDetail {
      Ctx: ctx.Value("GAE").(context.Context),
      FunctionName: "Get User Resolver",
      TranID: jwtPayload.Txn,
      UID: jwtPayload.Sub,
      CID: jwtPayload.CID,
      ProductID: "",
  }     
    
  helper.Log(c, "info", "Started")

  var user *authentication.AccountModel
  var err error
  
  if c.UID == "" {
    c.UID = "00000000000000000000000000"
  }
  
  if c.UID != "00000000000000000000000000" {
   user, err = authentication.ReadUserAccount(c)
   if err != nil {
       helper.Log(c, "error", "User Detail Load", "error", err.Error())
       user = authentication.NullAccount
     }
  } else {
     helper.Log(c, "info", "User Detail Load", "error", "No UID")
     user = authentication.NullAccount
  }

  helper.Log(c, "info", "AuthPayload SiteID", "siteID", jwtPayload.CID)
  if user.Name != "" {
      helper.Log(c, "info", "User Detail Load")    
  }

  helper.Log(c, "info", "Completed")
  return &userDetailResolver{c, user}, nil
}

type userDetailResolver struct {
  c helper.ContextDetail
  u *authentication.AccountModel
}

func (r *userDetailResolver) Id() string {
  return "1"
}

func (r *userDetailResolver) Uid() string {
  return r.u.ID
}

func (r *userDetailResolver) Email() string {
  return r.u.Email
}

func (r *userDetailResolver) Name() string {
  return r.u.Name
}

func (r *userDetailResolver) PictureUrl() string {
  return r.u.PictureUrl
}