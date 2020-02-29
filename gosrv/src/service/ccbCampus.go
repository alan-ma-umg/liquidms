package service

import (
  "time"
  "strconv"
  "X/gosrv/src/helper"
  "X/gosrv/src/model"
)

func UpdateCCBCampus(c helper.ContextDetail, record CCBRecord) error {

  campusItem := &model.ItemModel {
    ID: "",
    ParentID: c.CID,
    Type: "campus",
    Value: record.Name,
    Color: "",
    Image: "",
    ExtID: strconv.Itoa(record.CCBID),
    ExtURL: "",
    ExtSync: "",
    CreatedTime: time.Now(),
    UpdatedTime: time.Now(),
  }

  findCampus, err := model.LoadItemByExtID(c.Ctx, "campus", strconv.Itoa(record.CCBID))
  if err != nil {
    helper.Log(c, "error", "Find Item By Ext ID", "extID", strconv.Itoa(record.CCBID), "error", err.Error())
    return err
  }
  if findCampus.ID == "" {
    campusItem.ID, err = helper.GenerateULID()
    if err != nil {
      helper.Log(c, "error", "generate ULID", "error", err.Error())
      return err
    } 
  } else {
    campusItem.ID = findCampus.ID
    campusItem.CreatedTime = findCampus.CreatedTime
  }
  
  if err = model.SaveItem(c.Ctx, campusItem.ID, campusItem); err != nil {
    return err
  }
  
  return nil
}