package authentication

import (
  "math/rand"
  "encoding/base64"
  "strings"
	"time"

  "X/gosrv/src/helper"
)

func CreateUserAccount(c helper.ContextDetail, providerAccount AccountModel) string {
  userID, err := helper.GenerateULID()

  if err != nil {
    helper.Log(c, "error", "Generate UserID", "error", err.Error())
    return ""
  }

  helper.Log(c, "info", "Create User Account")

  userAccount := &AccountModel {
    Type: "user",
    ID: userID,
    Email: providerAccount.Email,
    Name: providerAccount.Name,
    PhoneNumber: "",
    PictureUrl: providerAccount.PictureUrl,
    CreatedTime: time.Now(),
    UpdatedTime: time.Now(),
    LastLoginTime: time.Now(),
    UserID: userID,
	}

  err = SaveAccount(c.Ctx, userAccount.ID, userAccount)    
	if err != nil {
    helper.Log(c, "error", "Create User Account", "error", err.Error())
    return ""
	}
  
  return userID
}

func ReadUserAccount(c helper.ContextDetail) (*AccountModel, error) {
  helper.Log(c, "info", "Read User Account")
  
  userAccount, err:= LoadAccount(c.Ctx, c.UID)
  if err != nil {
    helper.Log(c, "error", "Read User Account", "error", err.Error())
    return NullAccount, err
  }

  if userAccount.ID != c.UID {
    helper.Log(c, "warning", "Read User Not Found")
    return NullAccount, nil
  }
  
  return userAccount, nil
}

func generateUserID(email string) (string, error) {
    rand.Seed(time.Now().UnixNano())
    
    base64Email := base64.URLEncoding.EncodeToString([]byte(email))
    
    if len(email) > 15 {
        email = email[0:15]
    }
    size := 30-len(email)
     
    b := make([]byte, size)
    _, err := rand.Read(b)
    if err != nil {
        return "", err
    }
    
    base64Prefix := base64.URLEncoding.EncodeToString(b)
    
    userID := strings.TrimRight(base64.URLEncoding.EncodeToString([]byte(base64Prefix + base64Email)), "=")
    
    return userID, nil
}