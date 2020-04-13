package service

import (
  "time"
  "errors"
  "io/ioutil"
  "net/http"
  "encoding/json"
  
  "X/gosrv/src/helper"
)

type CCBRecord struct {
  CCBID     int       `json:"id"`
  Name      string    `json:"name"`
  Type      string    `json:"type,omitempty"`
  ParentID  string    `json:"-"`
}

var NullCCBRecord = &CCBRecord {
  CCBID: 0,
  Name: "",
  Type: "",
  ParentID: "",
}

var PHPSESSID = "bd93701489f57c1019b4e41906371e7f;"

func LoadCCBRecord(c helper.ContextDetail, action string) (*[]CCBRecord, error) {
  
  url := "https://liquidchurch.ccbchurch.com/api/" + action
  
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
//  req.Header.Add("Authorization","Bearer 6eda50f9ac690b8f2b02a4df50668f62d19fcf1b32f5366bc88fdea59f162c7e")
//  req.Header.Add("Accept","application/vnd.ccbchurch.v2+json")
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
    helper.Log(c, "error", "Error reading response body", "error", err.Error())
    return nil, err
  }
  
  var respJson = new([]CCBRecord)
  
  err = json.Unmarshal(body, &respJson)
  if err != nil {
    helper.Log(c, "error", "Error parsing response body", "error", err.Error())
    return nil, err
  }
  
  return respJson, nil
}