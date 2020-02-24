package authentication

import (
	"time"
  "context"
  "cloud.google.com/go/datastore"
)

type AccountModel struct {
  Type            string
  ID              string
  Name            string 
  Email           string
  PhoneNumber     string   
  PictureUrl      string
  CreatedTime     time.Time
  UpdatedTime     time.Time
	LastLoginTime	  time.Time
	UserID      string
} 

var NullAccount = &AccountModel {
  Type: "",
  ID: "",
  Name: "",
  Email: "",
  PhoneNumber: "",
  PictureUrl: "",
  CreatedTime: time.Now(),
  UpdatedTime: time.Now(),
  LastLoginTime: time.Now(),
  UserID: "",
}

func SaveAccount(ctx context.Context, indexKey string, saveRecord *AccountModel) error {
  dsClient, err := datastore.NewClient(ctx, "liquidms")
  if err != nil {
		return err
	}
  defer dsClient.Close()
  
  dbKind := "AccountDetail"
  key := datastore.NameKey(dbKind, indexKey, nil)
  
  if _, err := dsClient.Put(ctx, key, saveRecord); err != nil {
    return err
  }
  return nil
}

func LoadAccount(ctx context.Context, indexKey string) (*AccountModel, error) {
  dsClient, err := datastore.NewClient(ctx, "liquidms")
  if err != nil {
		return NullAccount, err
	}
  defer dsClient.Close()
  
  dbKind := "AccountDetail"
  key := datastore.NameKey(dbKind, indexKey, nil)
  
  e := new(AccountModel)
  if err := dsClient.Get(ctx, key, e); err != nil{
    return NullAccount, err
  }

  return e, nil
}