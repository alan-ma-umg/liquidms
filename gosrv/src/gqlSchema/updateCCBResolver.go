package gqlSchema

import (
//  "time"
  "errors"
  "strconv"
  "context"
//  "encoding/json"
  "cloud.google.com/go/datastore"
  
  "X/gosrv/src/helper"
//  "X/gosrv/src/model"
  "X/gosrv/src/service"
  "X/gosrv/src/authorization"
)

type updateInput struct {
  CCBType     string
  ParentID    string
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
  
  dsClient, err := datastore.NewClient(ctx, "liquidms")
  if err != nil {
		return nil, err
	}
  defer dsClient.Close()
  
  c.Dsc = *dsClient
  
  if (c.UID == "00000000000000000000000000") {
    helper.Log(c, "warning", "No User Logged in", "uid", c.UID)
    // err := errors.New("No Logged in user`")
    // return nil, err
  }
  
  var ccbRecords *[]service.CCBRecord
  // var err error
  var items []*itemResolver
  
  switch args.Params.CCBType {
    case "campus":
      ccbRecords, err = service.LoadCCBRecord(c, "campuses")
      if err != nil {
        helper.Log(c, "error", "CCB Campuses Load", "error", err.Error())
        return nil, err
      }
    case "groupType":
      ccbRecords, err = service.LoadCCBRecord(c, "group_types")
      if err != nil {
        helper.Log(c, "error", "CCB Group Type Load", "error", err.Error())
        return nil, err
      }
    case "attendanceGroup":
      ccbRecords, err = service.LoadCCBRecord(c, "church/attendance_groupings")
      if err != nil {
        helper.Log(c, "error", "CCB Attendance Group Load", "error", err.Error())
        return nil, err
      }
    case "membershipType":
      ccbRecords, err = service.LoadCCBRecord(c, "church/membership_types")
      if err != nil {
        helper.Log(c, "error", "CCB Membership Type Load", "error", err.Error())
        return nil, err
      }
    case "checkin":
      ccbCampus, err := service.LookupCCBItemByID(c, args.Params.ParentID)
      if err != nil || ccbCampus.Type != "campus" {
        return nil, err
      }

      ccbRecords, err = service.LoadCCBRecord(c, "checkin/setups?campus_id=" + strconv.Itoa(ccbCampus.CCBID))
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
      case "checkin":
      ccbItem, err := service.UpsertCCBItemByCCBID(c, "checkin:" + ccbRecord.Type, args.Params.ParentID, ccbRecord)
        if err != nil {
          return nil, err
        } else {
          items = append(items, &itemResolver{c, &ccbItem})
          
          ccbRecord.ParentID = ccbItem.ID
          _ ,_ = service.LoadCCBCheckinSetup(c, ccbRecord, ccbItem.ID)
        }
      default:
        ccbItem, err := service.UpsertCCBItemByCCBID(c, args.Params.CCBType, c.CID, ccbRecord) 
        if err != nil {
          return nil, err
        } else {
          items = append(items, &itemResolver{c, &ccbItem})
        }
      }
  
  }
  
  helper.Log(c, "info", "Completed")
  return &items, nil
}