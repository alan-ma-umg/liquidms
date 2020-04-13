package service

import (
  //"log"
  "time"
  "errors"
  "strconv"
  "io/ioutil"
  "net/http"
  "encoding/json"
  
  "X/gosrv/src/helper"
  "X/gosrv/src/model"
)

type CCBCheckinSetup struct {
  CCBID       int               `json:"id"`
  Name        string            `json:"name"`
  Type        string            `json:"type,omitempty"`
  ParentID    string            `json:"-"`
  Token       string            `json:"token"`
  Password    string            `json:"password"`
  LabelType   string            `json:"label_type"`
  SecCodeType string            `json:"security_code_type"`
  Times       []ChkinTime       `json:"times"`
  Criteria    []ChkinCriterion  `json:"criteria"`
}

type ChkinTime struct {
  RawTime     string  `json:"raw_time"`
}

type ChkinCriterion struct {
  CriterionType   string    `json:"target_type"`
  CriterionId     int       `json:"target_id"`
}
func LoadCCBCheckinSetup(c helper.ContextDetail, ccbCheckin CCBRecord, itemID string) (*[]CCBRecord, error) {
  
  url := "https://liquidchurch.ccbchurch.com/api/checkin/setups/" + strconv.Itoa(ccbCheckin.CCBID)
  
  timeout := time.Duration(5 * time.Second)
  tr := &http.Transport{
			MaxIdleConns:          100,
			IdleConnTimeout:       500 * time.Millisecond,
			TLSHandshakeTimeout:   250 * time.Millisecond,
			ExpectContinueTimeout: 0 * time.Millisecond,
			ResponseHeaderTimeout: 400 * time.Millisecond,
  }
  
  client := &http.Client{
    Timeout: timeout,
		Transport: tr,
    CheckRedirect: func(req *http.Request, via []*http.Request) error {
      return http.ErrUseLastResponse
    },
  }
  
  
  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("cookie","PHPSESSID=" + PHPSESSID)
  
  req.Close = true
  
  res, err := client.Do(req.WithContext(c.Ctx)) 
  if err != nil {
	    return nil, err
	}
  defer res.Body.Close()

  if res.StatusCode != 200 {
    helper.Log(c, "error", "HTTP call not successful", "response code", res.Status)
    err := errors.New("Response Code: " + res.Status)
    return nil, err
  }

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    helper.Log(c, "error", "Reading response body", "error", err.Error())
    return nil, err
  }
  
  var respJson = new(CCBCheckinSetup)
  
  err = json.Unmarshal(body, &respJson)
  if err != nil {
    helper.Log(c, "error", "Parsing response body", "error", err.Error())
    return nil, err
  }
  
  if respJson.CCBID != ccbCheckin.CCBID {
    err := errors.New("Checkin Setup ID mismatch")
    helper.Log(c, "error", "Parsing response body", "error", err.Error())
    return nil, err
  }
  
  var attributes []model.AttributeModel
  
  item, err1 := UpsertCCBItemByName(c, "checkinToken", c.CID, respJson.Token)
  if err1 != nil {
    helper.Log(c, "error", "Upsert CCB Item By Name", "type", "checkinToken", "error", err1.Error())
    return nil, err1
  }
  
  attributes = append(attributes,  model.AttributeModel {
    ID: "",
    ItemID: itemID,
    Type: item.Type,
    AttributeID: item.ID,
    CreatedTime: time.Now(),
  })
  
  item, err1 = UpsertCCBItemByName(c, "checkinLabel", c.CID, respJson.LabelType+":"+respJson.SecCodeType)
  if err1 != nil {
    helper.Log(c, "error", "Upsert CCB Item By Name", "type", "checkinLabel", "error", err1.Error())
    return nil, err1
  }
  
  attributes = append(attributes,  model.AttributeModel {
    ID: "",
    ItemID: itemID,
    Type: item.Type,
    AttributeID: item.ID,
    CreatedTime: time.Now(),
  })
  
  item, err1 = UpsertCCBItemByName(c, "checkinPassword", c.CID, respJson.Password)
  if err1 != nil {
    helper.Log(c, "error", "Upsert CCB Item By Name", "type", "checkinPassword", "error", err1.Error())
    return nil, err1
  }
  
  attributes = append(attributes,  model.AttributeModel {
    ID: "",
    ItemID: itemID,
    Type: item.Type,
    AttributeID: item.ID,
    CreatedTime: time.Now(),
  })

  if len(respJson.Times) > 0 { 
    for _, chkinTime := range respJson.Times {
      item, err1 = UpsertCCBItemByName(c, "checkinTime", c.CID, chkinTime.RawTime)
      if err1 != nil {
        helper.Log(c, "error", "Upsert CCB Item By Name", "type", "checkinTime", "error", err1.Error())
        return nil, err1
      }

      attributes = append(attributes,  model.AttributeModel {
        ID: "",
        ItemID: itemID,
        Type: item.Type,
        AttributeID: item.ID,
        CreatedTime: time.Now(),
      })
    }
  }
  
  if len(respJson.Criteria) > 0 {
    for _, chkinCriterion := range respJson.Criteria {
      
      var foundItem *model.ItemModel
      if chkinCriterion.CriterionType == "GROUP_TYPE" {
        foundItem, err1 = model.LoadItemByExtID(c.Ctx, c.Dsc, "groupType", strconv.Itoa(chkinCriterion.CriterionId))
      } else if chkinCriterion.CriterionType == "ATTENDANCE_GROUPING" {
        foundItem, err1 = model.LoadItemByExtID(c.Ctx, c.Dsc, "attendanceGroup", strconv.Itoa(chkinCriterion.CriterionId))
      }
      
      attributes = append(attributes,  model.AttributeModel {
        ID: "",
        ItemID: itemID,
        Type: "checkinCriteria",
        AttributeID: foundItem.ID,
        CreatedTime: time.Now(),
      })
    }
  }
  
  if err := UpdateAllCCBAttributesByItemID(c, itemID, attributes); err != nil {
    return nil, err
  }
  

  /*
  if err1 != nil {
    helper.Log(c, "error", "Upsert CCB Item By Name", "type", "checkinToken", "error", err1.Error())
    return nil, err1
  }
  
  if err1 = UpsertSingleCCBAttribute(c, itemID, tokenItem.ID, "checkinToken"); err1 != nil {
    helper.Log(c, "error", "Load Attributes By Item and Type", "itemID", itemID, "error", err1.Error())
  }
  
  if err1 != nil {
    helper.Log(c, "error", "Upsert CCB Item By Name", "type", "checkinLabel", "error", err1.Error())
    return nil, err1
  }
  
  if err1 = UpsertSingleCCBAttribute(c, itemID, labelItem.ID, "checkinLabel"); err1 != nil {
    helper.Log(c, "error", "Load Attributes By Item and Type", "itemID", itemID, "error", err1.Error())
  }
  
  if err1 != nil {
    helper.Log(c, "error", "Upsert CCB Item By Name", "type", "checkinPassword", "error", err1.Error())
    return nil, err1
  }
  
  if err1 = UpsertSingleCCBAttribute(c, itemID, passwordItem.ID, "checkinPassword"); err1 != nil {
    helper.Log(c, "error", "Load Attributes By Item and Type", "itemID", itemID, "error", err1.Error())
  }  
  */

  return nil, nil
}