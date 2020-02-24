package helper

import (
  "os"
  "log"
  "context"
  cRand "crypto/rand"
  mRand "math/rand"
  "encoding/base64"
  "github.com/oklog/ulid"
  "cloud.google.com/go/logging"  
)

type ContextDetail struct {
  Ctx context.Context
  FunctionName string
  TranID string
  UID string
  CID string
  ProductID string
}

func Log(c ContextDetail, level string, action string, args ...string) {

  projectID := os.Getenv("PROJECT_ID")
  if projectID == "" {
		projectID = "liquidms"
	}
  
  client, err := logging.NewClient(c.Ctx, projectID)
  if err != nil {
    log.Fatalf("Failed to create logging client: %v", err)
  }
  defer client.Close()  
  
  logName := os.Getenv("LOG_NAME")
  if logName == "" {
		logName = "codeanywhere"
	}
  
  funcString := "\"Function\":\"" + c.FunctionName + "\""
  txnIDString := "\"TranID\":\"" + c.TranID + "\""
  uIDString := "\"UID\":\"" + c.UID + "\""
  cIDString := "\"CID\":\"" + c.CID + "\""
  levelString := "\"Level\":\"" + level + "\""
  actionString := "\"Action\":\"" + action + "\""
  argsString := ""

  if len(args) >=2 {
    argsString = ", \"" + args[0] + "\":\"" + args[1] + "\"" 
  } 

  if len(args) >= 4 {
    argsString = argsString + ", \"" + args[2] + "\":\"" + args[3] + "\""    
  }

  logString := "{" + funcString + ", " + txnIDString +  ", " + uIDString + ", " + cIDString + ", " + levelString + ", " + actionString + argsString + "}"

  logger := client.Logger(logName)
  switch level {
    case "warning": logger.Log(logging.Entry{Payload:logString, Severity: logging.Warning})
    case "info": logger.Log(logging.Entry{Payload:logString, Severity: logging.Info})
    case "error": logger.Log(logging.Entry{Payload:logString, Severity: logging.Error})
    case "critical": logger.Log(logging.Entry{Payload:logString, Severity: logging.Critical})
    default: logger.Log(logging.Entry{Payload:logString, Severity: logging.Default})
  }

  log.Println(logString)
  
}

func GenerateTranID() string {   
  b := make([]byte, 12)
  _, err := mRand.Read(b)
  if err != nil {
    return ""
  }

  return base64.URLEncoding.EncodeToString(b)
}

func GenerateULID() (string, error) {
	id, err := ulid.New(ulid.Now(), cRand.Reader)
	if err != nil {
	  return "", err
  }
	return id.String(), nil
}