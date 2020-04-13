package service

import (
  "time"
  "errors"
  "strconv"
  "X/gosrv/src/helper"
  "X/gosrv/src/model"
)

func UpsertCCBItemByCCBID(c helper.ContextDetail, itemType string, parentID string, record CCBRecord) (model.ItemModel, error) {

  ccbItem := &model.ItemModel {
    ID: "",
    ParentID: parentID,
    Type: itemType,
    Value: record.Name,
    Color: "",
    Image: "",
    ExtID: strconv.Itoa(record.CCBID),
    ExtURL: "",
    ExtSync: "",
    CreatedTime: time.Now(),
    UpdatedTime: time.Now(),
  }

  findItem, err := model.LoadItemByExtID(c.Ctx, c.Dsc, itemType, strconv.Itoa(record.CCBID))
  if err != nil {
    helper.Log(c, "error", "Find Item By Ext ID", "extID", strconv.Itoa(record.CCBID), "error", err.Error())
    return *model.NullItem, err
  }
  
  if findItem.ID == "" {
    ccbItem.ID, err = helper.GenerateULID()
    if err != nil {
      helper.Log(c, "error", "generate ULID", "error", err.Error())
      return *model.NullItem, err
    } 
  } else {
    ccbItem.ID = findItem.ID
    ccbItem.CreatedTime = findItem.CreatedTime
  }
  
  if findItem.Value != record.Name {
    if err = model.SaveItem(c.Ctx, c.Dsc, ccbItem.ID, ccbItem); err != nil {
      return *model.NullItem, err
    }
    helper.Log(c, "info", "Upsert Item, item updated", "itemID", ccbItem.ID)
    return *ccbItem, nil
  } else {
    helper.Log(c, "info", "Upsert Item, no change", "itemID", ccbItem.ID)
    return *findItem, nil
  }
}

func UpsertCCBItemByName(c helper.ContextDetail, itemType string, parentID string, name string) (model.ItemModel, error) {

  ccbItem := &model.ItemModel {
    ID: "",
    ParentID: parentID,
    Type: itemType,
    Value: name,
    Color: "",
    Image: "",
    ExtID: "",
    ExtURL: "",
    ExtSync: "",
    CreatedTime: time.Now(),
    UpdatedTime: time.Now(),
  }

  findItem, err := model.LoadItemByValue(c.Ctx, c.Dsc, itemType, name)
  if err != nil {
    helper.Log(c, "error", "Find Item By Value", "value", name, "error", err.Error())
    return *model.NullItem, err
  } 
  
  if findItem.ID == "" {
    ccbItem.ID, err = helper.GenerateULID()
    if err != nil {
      helper.Log(c, "error", "generate ULID", "error", err.Error())
      return *model.NullItem, err
    }

    if err = model.SaveItem(c.Ctx, c.Dsc, ccbItem.ID, ccbItem); err != nil {
      return *model.NullItem, err
    }
    helper.Log(c, "info", "Upsert Value, item updated", "itemID", ccbItem.ID)
    
    return *ccbItem, nil
    
  } else {
    helper.Log(c, "info", "Upsert Value, no change", "itemID", findItem.ID)
    return *findItem, nil
  }
  
}


func LookupCCBItemByID(c helper.ContextDetail, itemID string) (*CCBRecord, error) {
  findItem, err := model.LoadItem(c.Ctx, c.Dsc, itemID)
  if err != nil {
    helper.Log(c, "error", "Lookup CCB Item", "itemID", itemID, "error", err.Error())
    return NullCCBRecord, err
  }
  
  if findItem.ID != itemID {
    err := errors.New("Error looking up Campus ID")
    helper.Log(c, "error", "Lookup CCB Item", "itemID", itemID, "error", err.Error())
    return NullCCBRecord, err
  }
  
  extId, _ := strconv.Atoi(findItem.ExtID)
  ccbRecord := &CCBRecord{
    CCBID: extId,
    Name: findItem.Value,
    Type: findItem.Type,
    ParentID: findItem.ParentID,
  }
  
  return ccbRecord, nil
}