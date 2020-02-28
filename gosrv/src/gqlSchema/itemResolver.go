package gqlSchema

import (
  "context"

  "X/gosrv/src/helper"
  "X/gosrv/src/model"
  "X/gosrv/src/authorization"
)

type itemFilter struct {
  Id        string
  IdType    string
  Type      string
  ParentId  string
}

func (r *Resolver) GetItem(ctx context.Context, args *struct{Lookup itemFilter}) (*itemResolver, error) {
  jwtPayload := ctx.Value("JWT").(authorization.JWTPayload)
  c := helper.ContextDetail {
      Ctx: ctx.Value("GAE").(context.Context),
      FunctionName: "Item Resolver",
      TranID: jwtPayload.Txn,
      UID: jwtPayload.Sub,
      CID: jwtPayload.CID,
      ProductID: "",
  }  
  helper.Log(c, "info", "Started")  

  helper.Log(c, "info", "Item Lookup", "uid", c.UID, )

  var foundItem *model.ItemModel
  var loadItemErr error
  
  switch args.Lookup.IdType {
    case "Int":
      helper.Log(c, "info", "Item Lookup by Item ID", "uid", c.UID, "itemId", args.Lookup.Id)    
      foundItem, loadItemErr = model.LoadItem(c.Ctx, args.Lookup.Id)
    default:
      helper.Log(c, "warning", "IdType not valid", "uid", c.UID, "id", args.Lookup.Id)
      foundItem = model.NullItem
  }

  if loadItemErr != nil {
    helper.Log(c, "warning", "Error loading item detail", "uid", c.UID, "id", args.Lookup.Id)
    foundItem = model.NullItem
  }
  
  if foundItem.ID == "" {
    helper.Log(c, "warning", "No item found item", "uid", c.UID, "id", args.Lookup.Id)
    foundItem = model.NullItem
  }
  
  helper.Log(c, "info", "Completed")

  return &itemResolver{c, foundItem}, nil
}

type itemResolver struct {
  c helper.ContextDetail
  u *model.ItemModel
}

func (r *itemResolver) Id() string {
  return r.u.ID
}

func (r *itemResolver) ParentId() string {
  return r.u.ParentID
}

func (r *itemResolver) Type() string {
  return r.u.Type
}

func (r *itemResolver) Value() string {
  return r.u.Value
}

func (r *itemResolver) Color() string {
  return r.u.Color
}

func (r *itemResolver) Image() string {
  return r.u.Image
}

func (r *itemResolver) ExtID() string {
  return r.u.ExtID
}

func (r *itemResolver) ExtURL() string {
  return r.u.ExtURL
}

func (r *itemResolver) ExtSync() string {
  return r.u.ExtSync
}