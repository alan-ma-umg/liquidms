package model

import (
  "time"
  "context"
  "google.golang.org/api/iterator"  
  "cloud.google.com/go/datastore"
)

type ItemModel struct {
  ID              string
  ParentID        string
  Type            string
  Value           string
  Color           string
  Image           string
  ExtID           string
  ExtURL          string
  ExtSync         string
  CreatedTime     time.Time
  UpdatedTime	    time.Time
} 

var NullItem = &ItemModel {
  ID: "",
  ParentID: "",
  Type: "",
  Value: "",
  Color: "",
  Image: "",
  ExtID: "",
  ExtURL: "",
  ExtSync: "",
  CreatedTime: time.Now(),
  UpdatedTime: time.Now(),
}

func SaveItem(ctx context.Context, dsClient datastore.Client, indexKey string, saveRecord *ItemModel) error {
  dbKind := "ItemDetail"

  //saveRecord.ByteDescription = []byte(saveRecord.Description)

  key := datastore.NameKey(dbKind, indexKey, nil)

  if _, err := dsClient.Put(ctx, key, saveRecord); err != nil {
    return err
  }
  return nil
}

func LoadItem(ctx context.Context, dsClient datastore.Client, indexKey string) (*ItemModel, error) {  
  dbKind := "ItemDetail"
  key := datastore.NameKey(dbKind, indexKey, nil)

  e := new(ItemModel)
  if err := dsClient.Get(ctx, key, e); err != nil {
    return NullItem, err             
  }
  
  //e.Description = e(foundRecord.ByteDescription)
  return e, nil
}

func LoadItemsByType(ctx context.Context, dsClient datastore.Client, itemType string, parentID string) (*[]ItemModel, error) {
  dbKind := "ItemDetail"
  
  var foundRecords []ItemModel
  
  query := datastore.NewQuery(dbKind).
           Filter("Type =", itemType).
           Filter("ParentID =", parentID)
  
  transaction := dsClient.Run(ctx, query)
  
  for {
    var x ItemModel
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
    foundRecords = append(foundRecords, *NullItem)
  }
  
  return &foundRecords, nil
}

func LoadItemByExtID(ctx context.Context, dsClient datastore.Client, itemType string, extID string) (*ItemModel, error) {
  dbKind := "ItemDetail"
  
  var foundRecords []ItemModel
  
  query := datastore.NewQuery(dbKind).
           Filter("Type =", itemType).
           Filter("ExtID =", extID)
  
  transaction := dsClient.Run(ctx, query)
  
  for {
    var x ItemModel
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
    return NullItem, nil
  } else {
    return &foundRecords[0], nil
  }
  
}

func LoadItemByValue(ctx context.Context, dsClient datastore.Client, itemType string, value string) (*ItemModel, error) {  
  dbKind := "ItemDetail"
  
  var foundRecords []ItemModel
  
  query := datastore.NewQuery(dbKind).
           Filter("Type =", itemType).
           Filter("Value =", value)
  
  transaction := dsClient.Run(ctx, query)
  
  for {
    var x ItemModel
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
    return NullItem, nil
  } else {
    return &foundRecords[0], nil
  }
  
}

/*
func LoadItemDetailByETP(ctx context.Context, extID string, itemType string, parentID string) (*ItemDetail, error) {
  dbKind := "ItemDetail"
  
  var foundRecords []ItemDetail
  
  query := datastore.NewQuery(dbKind).
           Filter("ExtID =", extID).
           Filter("Type =", itemType).
           Filter("ParentID =", parentID)
  
  if _, err := query.GetAll(ctx, &foundRecords); err != nil {
    return nil, err
  }
  
  if len(foundRecords) == 0 {
    foundRecords = append(foundRecords, *NullItemDetail)
  }

  foundRecords[0].Description = string(foundRecords[0].ByteDescription)
  return &foundRecords[0], nil  
}
/*
  query := datastore.NewQuery(dbKind).
           Filter("ExtID =", extID)

query := datastore.NewQuery(dbKind).
           Filter("ExtID =", extID).
           Filter("Type =", itemType).
           Filter("ParentID =", parentID)


*/