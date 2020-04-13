package model

import (
  "time"
  "context"
  "google.golang.org/api/iterator"  
  "cloud.google.com/go/datastore"  
)

type AttributeModel struct {
  ID          string
  ItemID      string
  Type        string
  AttributeID string
  CreatedTime time.Time
  IsFound     bool    `datastore:"-"`
}

var NullAttribute = &AttributeModel {
  ID: "",
  ItemID: "",
  Type: "",
  AttributeID: "",
  CreatedTime: time.Now(),
}


func CreateAttribute(ctx context.Context, dsClient datastore.Client, saveRecord *AttributeModel) error {
  dbKind := "AttributeDetail"
  
  key := datastore.NameKey(dbKind, saveRecord.ID, nil)
  
  var err error
  if _, err = dsClient.Put(ctx, key, saveRecord); err != nil {
    return err
  }
  
  return nil
}

func DeleteAttribute(ctx context.Context, dsClient datastore.Client, deleteID string) error {
  dbKind := "AttributeDetail"
  
  key := datastore.NameKey(dbKind, deleteID, nil)
  
  if err := dsClient.Delete(ctx, key); err != nil {
    return err
  }
  return nil
}

func SwapAttribute(ctx context.Context, dsClient datastore.Client, saveRecord *AttributeModel, oldID string) error {
  dbKind := "AttributeDetail"

  newKey := datastore.NameKey(dbKind, saveRecord.ID, nil)
  oldKey := datastore.NameKey(dbKind, oldID, nil)
  
  tx, err := dsClient.NewTransaction(ctx)
  
  if err != nil {
    return err
  }
  
  if _, err = tx.Put(newKey, saveRecord); err != nil {
    tx.Rollback()
    return err
  }
  
  if err = tx.Delete(oldKey); err != nil {
    tx.Rollback()
    return err
  }
 
  if _, err = tx.Commit(); err != nil {
    return err
  }
  
  return nil
}

func LoadAttributesByItemAndType(ctx context.Context, dsClient datastore.Client, itemID string, attributeType string) (*[]AttributeModel, error) {
  dbKind := "AttributeDetail"
  
  var foundRecords []AttributeModel
  
  query := datastore.NewQuery(dbKind).
           Filter("ItemID =", itemID).
           Filter("Type =", attributeType)
  
  transaction := dsClient.Run(ctx, query)
  
  for {
    var x AttributeModel
    _, err := transaction.Next(&x)
    if err == iterator.Done {
      break
    }
    if err != nil {
      return nil, err
    }
    foundRecords = append(foundRecords, x)
  }
  
  if len(foundRecords) == 0 {
    foundRecords = append(foundRecords, *NullAttribute)
  }
  
  return &foundRecords, nil
}

func LoadAttributesByItem(ctx context.Context, dsClient datastore.Client, itemID string) (*[]AttributeModel, error) {
  dbKind := "AttributeDetail"
  
  var foundRecords []AttributeModel
  
  query := datastore.NewQuery(dbKind).
           Filter("ItemID =", itemID)
  
  transaction := dsClient.Run(ctx, query)
  
  for {
    var x AttributeModel
    _, err := transaction.Next(&x)
    if err == iterator.Done {
      break
    }
    if err != nil {
      return nil, err
    }
    foundRecords = append(foundRecords, x)
  }
  
  if len(foundRecords) == 0 {
    foundRecords = append(foundRecords, *NullAttribute)
  }
  
  return &foundRecords, nil
}