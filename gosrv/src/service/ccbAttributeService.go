package service 

import (
  "log"
  "time"
  "errors"
  "X/gosrv/src/helper"
  "X/gosrv/src/model"
)

func UpsertSingleCCBAttribute(c helper.ContextDetail, itemID string, attributeID string, attributeType string) error {
  
  newID, err := helper.GenerateULID()
  if err != nil {
    return err
  }
  
  ccbAttribute := &model.AttributeModel {
    ID: newID,
    ItemID: itemID,
    Type:  attributeType,
    AttributeID: attributeID,
    CreatedTime: time.Now(),
  }

  foundCCBAttributes, err := model.LoadAttributesByItemAndType(c.Ctx, c.Dsc, itemID, attributeType)
  
  if err != nil {
    return err
  } else if len(*foundCCBAttributes) != 1 {
    err := errors.New("Too many attributes found")
    return err
  }
  
  if (*foundCCBAttributes)[0].ID == "" {
    if err := model.CreateAttribute(c.Ctx, c.Dsc, ccbAttribute); err != nil {
      return err
    }
  } else if (*foundCCBAttributes)[0].AttributeID != attributeID {
    log.Println("need to swap")
    if err := model.SwapAttribute(c.Ctx, c.Dsc, ccbAttribute, (*foundCCBAttributes)[0].ID); err != nil {
      return nil
    }
  } 

  log.Println("no change")
  return nil
}

func UpdateAllCCBAttributesByItemID(c helper.ContextDetail, itemID string, attributes []model.AttributeModel) error {
  
  foundCCBAttributes, err := model.LoadAttributesByItem(c.Ctx, c.Dsc, itemID)
 
  for _, attribute := range attributes {
    
    isMatch := false
    
    for j, foundAttribute := range (*foundCCBAttributes) {
      if foundAttribute.AttributeID == attribute.AttributeID {
        log.Println("attribute found", attribute.AttributeID)
        (*foundCCBAttributes)[j].IsFound = true;
        isMatch = true
      }
    }
    
    if !isMatch {
      log.Println("creating new attribute", attribute.AttributeID)
      attribute.ID, err = helper.GenerateULID()
      if err != nil {
        return err
      }
      if err := model.CreateAttribute(c.Ctx, c.Dsc, &attribute); err != nil {
        return err
      }
    }
  }
  
  for _, foundAttribute := range (*foundCCBAttributes) {
    if !foundAttribute.IsFound {
      log.Println("found attribute to delete", foundAttribute.AttributeID)
      if err := model.DeleteAttribute(c.Ctx, c.Dsc, foundAttribute.ID); err != nil {
        return err
      }
    }
    
    
  }
  
  return nil
}
