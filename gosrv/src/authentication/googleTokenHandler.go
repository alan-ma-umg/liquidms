package authentication

import (
  "os"
  "encoding/base64"
  "strings"
	"time"
	"errors"

  "X/gosrv/src/helper"
)

var adminSID = os.Getenv("ADMIN_SID")

func GoogleTokenHandler(c helper.ContextDetail, googleTokenInfo GoogleTokenInfo) (string, error) {
  
  if googleTokenInfo.Sub == "" {
    err := errors.New("Google Token Missing Sub")
    return "", err
  }
  
  googleAccountSub := "google" + "=" + googleTokenInfo.Sub
  googleAccountID := strings.TrimRight(base64.StdEncoding.EncodeToString([]byte(googleAccountSub)), "=")
	
  googleAccount := &AccountModel {
    Type: "google",
    ID: googleAccountID,
    Email: googleTokenInfo.Email,
    Name: googleTokenInfo.Name,
    PhoneNumber: "",
    PictureUrl: "",
    CreatedTime: time.Now(),
    UpdatedTime: time.Now(),
    LastLoginTime: time.Now(),
    UserID: "",
	}
  
	if googleTokenInfo.Picture != "" {
    googleAccount.PictureUrl = googleTokenInfo.Picture
	}
	helper.Log(c, "info", "Checking for existing Google Account")
	loadGoogleAccount, err := LoadAccount(c.Ctx, googleAccountID)
	if err != nil {
    if err.Error() == "datastore: no such entity" {
      helper.Log(c, "error", "Load Google Account", "id", googleAccountID, "error", err.Error())
    } else {
      helper.Log(c, "error", "Load Google Account", "id", googleAccountID, "error", err.Error())
      return "", err  
    }
	}

	if loadGoogleAccount.ID != googleAccountID {   
    helper.Log(c, "info", "New Google Login Account", "id", googleAccountID)  
		
		googleAccount.UserID = CreateUserAccount(c, *googleAccount)
    
    if googleAccount.UserID == "" {
      err := errors.New("Error Creating User Account")
      helper.Log(c, "error", "New Google Login Account", "id", googleAccountID, "error", err.Error())  
      return "", err
    }
    
    /*
    if tokenInfo.Sub == adminSID {
      _, grantErr := PostGrant(c, accountDetail.UserDetailID, "00000000000000000000000000", "site", "write")
      
      if grantErr != nil {
        helper.Log(c, "error", "save admin grant error", "UID", accountDetail.UserDetailID, "error", grantErr.Error())
	    } 
      time.Sleep(1 * time.Second)
    }
    */
    
	} else {
    googleAccount.CreatedTime = loadGoogleAccount.CreatedTime
    googleAccount.UserID = loadGoogleAccount.UserID
	}
	
	err = SaveAccount(c.Ctx, googleAccountID, googleAccount)
	if err != nil {
    helper.Log(c, "error", "Update Google Acocunt", "id", googleAccountID, "error", err.Error())
	}
  
  return googleAccount.UserID, nil
}