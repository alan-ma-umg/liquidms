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
}

func LoadCCBRecord(c helper.ContextDetail, action string) (*[]CCBRecord, error) {
  
  url := "https://liquidchurch.ccbchurch.com/api/" + action
  
  timeout := time.Duration(5 * time.Second)
  tr := &http.Transport{
			MaxIdleConns:          100,
			IdleConnTimeout:       500 * time.Millisecond,
			TLSHandshakeTimeout:   250 * time.Millisecond,
			ExpectContinueTimeout: 0 * time.Millisecond,
			ResponseHeaderTimeout: 250 * time.Millisecond,
  }
  
  client := &http.Client{
    Timeout: timeout,
		Transport: tr,
    CheckRedirect: func(req *http.Request, via []*http.Request) error {
      return http.ErrUseLastResponse
    },
  }
  
  req, _ := http.NewRequest("GET", url, nil)
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