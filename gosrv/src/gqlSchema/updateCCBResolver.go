package gqlSchema

import (
//  "time"
  "errors"
  "context"
//  "encoding/json"

  "X/gosrv/src/helper"
//  "X/gosrv/src/model"
  "X/gosrv/src/service"
  "X/gosrv/src/authorization"
)

type updateInput struct {
  CCBType    string
}

func (r *Resolver) UpdateCCB(ctx context.Context, args *struct{Params updateInput}) (*[]*itemResolver, error) {
  jwtPayload := ctx.Value("JWT").(authorization.JWTPayload)
  c := helper.ContextDetail {
      Ctx: ctx.Value("GAE").(context.Context),
      FunctionName: "UpdateCCB Resolver",
      TranID: jwtPayload.Txn,
      UID: jwtPayload.Sub,
      CID: jwtPayload.CID,
      ProductID: "",
  }  
  helper.Log(c, "info", "Started")  
  
  if (c.UID == "00000000000000000000000000") {
    helper.Log(c, "warning", "No User Logged in", "uid", c.UID)
    // err := errors.New("No Logged in user`")
    // return nil, err
  }
  
  var ccbRecords *[]service.CCBRecord
  var err error
  
  switch args.Params.CCBType {
    case "campus":
      ccbRecords, err = service.LoadCCBRecord(c, "campuses")
      if err != nil {
        helper.Log(c, "error", "User Detail Load", "error", err.Error())
        return nil, err
      }

    default:
      err := errors.New("Invalid CCBType")
      return nil, err
  }
  
 
  for _, ccbRecord := range *ccbRecords {
    switch args.Params.CCBType {
      case "campus":
        if err := service.UpdateCCBCampus(c, ccbRecord); err != nil {
          return nil, err
        }
      default:
        return nil, nil
      }
  
  }
  
  helper.Log(c, "info", "Completed")
  return nil, nil
}