package authentication

// googleTokenIdVerifier validates google id token.
// https://developers.google.com/identity/sign-in/web/backend-auth
// https://github.com/google/oauth2client/blob/master/oauth2client/crypt.py

import (
	"bytes"
	"context"
	"crypto"
	"crypto/rsa"
	"crypto/sha256"
	"encoding/base64"
	"encoding/binary"
	"encoding/json"
	"errors"
	"io"
	"io/ioutil"
	"math/big"
	"strings"
	"time"
	"net/http"
  "strconv"
  //"golang.org/x/net/context/ctxhttp"
)

type Certs struct {
	Keys []keys `json:"keys"`
}

type GoogleTokenInfo struct {
	Sub           string `json:"sub"`
	Email         string `json:"email"`
	AtHash        string `json:"at_hash"`
	Aud           string `json:"aud"`
	EmailVerified bool   `json:"email_verified"`
	Name          string `json:"name"`
	GivenName     string `json:"given_name"`
	FamilyName    string `json:"family_name"`
	Picture       string `json:"picture"`
	Local         string `json:"locale"`
	Iss           string `json:"iss"`
	Azp           string `json:"azp"`
	Iat           int64  `json:"iat"`
	Exp           int64  `json:"exp"`
}

type keys struct {
	Kty string `json:"kty"`
	Alg string `json:"alg"`
	Use string `json:"use"`
	Kid string `json:"Kid"`
	N   string `json:"n"`
	E   string `json:"e"`
}


//Public functions

func VerifyGoogleIDToken(authToken string, certs *Certs, aud string) (*GoogleTokenInfo, error) {    
  var nilTokenInfo *GoogleTokenInfo
    
  if authToken == "" {
		err := errors.New("Google Token invalid, missing.")
		return nilTokenInfo, err
	}
    
	header, payload, signature, messageToSign := divideAuthToken(authToken)
    
	if header == nil {
	    err := errors.New("Google Token invalid, bad format")
		return nilTokenInfo, err
	}
	
	tokeninfo := getTokenInfo(payload)
  
	if aud != tokeninfo.Aud {
		err := errors.New("Google Token invalid, audience from token and certificate don't match")
		return nilTokenInfo, err
	}
	if (tokeninfo.Iss != "accounts.google.com") && (tokeninfo.Iss != "https://accounts.google.com") {
		err := errors.New("Google Token invalid, ISS from token and certificate don't match")
		return nilTokenInfo, err
	}
	if !isValidTime(tokeninfo) {
      err := errors.New("Google Token invalid, Token is expired." + strconv.FormatInt(tokeninfo.Iat, 10)+","+strconv.FormatInt(time.Now().Unix(), 10)+","+ strconv.FormatInt(tokeninfo.Exp, 10))
		return nilTokenInfo, err
	}

	key, err := choiceKeyByKeyID(certs.Keys, getAuthTokenKeyID(header))
	if err != nil {
		return nilTokenInfo, err
	}
	
	pKey := rsa.PublicKey{N: byteToInt(urlsafeB64decode(key.N)), E: btrToInt(byteToBtr(urlsafeB64decode(key.E)))}
	err = rsa.VerifyPKCS1v15(&pKey, crypto.SHA256, messageToSign, signature)
	if err != nil {
		return nilTokenInfo, err
	}
	
	return tokeninfo, nil
}

func GetGoogleCerts(ctx context.Context) (*Certs, error) {
	var certs *Certs
  
  // client := http.Client{}
  
  timeout := time.Duration(5 * time.Second)
  tr := &http.Transport{
			MaxIdleConns:          100,
			IdleConnTimeout:       1 * time.Second,
			TLSHandshakeTimeout:   10 * time.Second,
			ExpectContinueTimeout: 1 * time.Second,
			ResponseHeaderTimeout: 1 * time.Second,
  }
  
  client := &http.Client{
    Timeout: timeout,
		Transport: tr,
    CheckRedirect: func(req *http.Request, via []*http.Request) error {
      return http.ErrUseLastResponse
    },
  }
  
  //client := http.DefaultClient
  
  req, _ := http.NewRequest("GET", "https://www.googleapis.com/oauth2/v3/certs", nil)
  req.Close = true
  
  res, err := client.Do(req.WithContext(ctx))
  
  //res, err := ctxhttp.Get(ctx, nil, "https://www.googleapis.com/oauth2/v3/certs")
  if err != nil {
	    return nil, err
	}
  
	body, err1 := ioutil.ReadAll(res.Body)
	if err1 != nil {
	    return nil, err1
	}
  res.Body.Close()
  
  err = json.Unmarshal(body, &certs)

  if err != nil {
    return nil, err
  }

  return certs, nil
}

//Private Functions

func getTokenInfo(bt []byte) *GoogleTokenInfo {
	var a *GoogleTokenInfo
	json.Unmarshal(bt, &a)
	return a
}

func isValidTime(tokeninfo *GoogleTokenInfo) bool {
    if (tokeninfo.Iat < time.Now().Unix()) || (time.Now().Unix() < tokeninfo.Exp) {
      return true
    }
	return false
}

func urlsafeB64decode(str string) []byte {
	if m := len(str) % 4; m != 0 {
		str += strings.Repeat("=", 4-m)
	}
	bt, _ := base64.URLEncoding.DecodeString(str)
	return bt
}

func choiceKeyByKeyID(a []keys, tknkid string) (keys, error) {
    for i := 0; i < len(a); i ++ {
      if a[i].Kid == tknkid {
		return a[i], nil
      }
    } 
    
	err := errors.New("Token is not valid, kid from token and certificate don't match")
	var b keys
	return b, err
}

func getAuthTokenKeyID(bt []byte) string {
	var a keys
	json.Unmarshal(bt, &a)
	return a.Kid
}

func divideAuthToken(str string) ([]byte, []byte, []byte, []byte) {
	args := strings.Split(str, ".")
	
	if len(args) != 3 {
		return nil, nil, nil, nil
	}
	return urlsafeB64decode(args[0]), urlsafeB64decode(args[1]), urlsafeB64decode(args[2]), calcSum(args[0] + "." + args[1])
}

func byteToBtr(bt0 []byte) *bytes.Reader {
	var bt1 []byte
	if len(bt0) < 8 {
		bt1 = make([]byte, 8-len(bt0), 8)
		bt1 = append(bt1, bt0...)
	} else {
		bt1 = bt0
	}
	return bytes.NewReader(bt1)
}

func calcSum(str string) []byte {
	a := sha256.New()
	a.Write([]byte(str))
	return a.Sum(nil)
}

func btrToInt(a io.Reader) int {
	var e uint64
	binary.Read(a, binary.BigEndian, &e)
	return int(e)
}

func byteToInt(bt []byte) *big.Int {
	a := big.NewInt(0)
	a.SetBytes(bt)
	return a
}