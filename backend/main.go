package main 
 type Env struct {
ServerPort string `env:Server_PORT, required`
API_KEY string `env:"API_KEY, required"`

 }