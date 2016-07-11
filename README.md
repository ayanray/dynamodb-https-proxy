# DynamoDB HTTPS Proxy
For Local DynamoDB, you sometimes need a secure endpoint instead of the default HTTP-only support. 

This application provides a simple HTTPS proxy forwarding to a production or local DynamoDB endpoint.


## Usage
```bash
git clone git@github.com:ayanray/dynamodb-https-proxy.git
cd dynamodb-https-proxy
export HTTPS_PORT=3100
export DYNAMODB_URL=localhost:8000
npm start
```

#### Console Output
```bash
Server listening on port 3100
DynamoDB Proxy to localhost:8000

Configuration:
Set your own port by using environment variables HTTPS_PORT and DYNAMODB_URL
```
