var fs = require("fs");
var express = require("express");
var https = require('https');
var proxy = require('express-http-proxy');

/////////////////////////////////////////////

var HTTPS_PORT = process.env.HTTPS_PORT || 3102;
var DYNAMODB_URL = process.env.DYNAMODB_URL || 'localhost:8000';

/////////////////////////////////////////////

var app = express();

var apiProxy = proxy(DYNAMODB_URL, {
    forwardPath: function (req) {
        return require('url').parse(req.baseUrl).path;
    }
});
app.use("/*", apiProxy);

/////////////////////////////////////////////
// Setup Server

// HTTPS
https.createServer({
    key: fs.readFileSync('keys/private.key'),
    cert: fs.readFileSync('keys/certificate.pem')
  }, app)
  .listen(HTTPS_PORT, function () {
    console.log('Server listening on port ' + HTTPS_PORT);
    console.log('DynamoDB Proxy to ' + DYNAMODB_URL);
    console.log('');
    console.log('* Configuration *');
    console.log('Set your own port by using environment variables HTTPS_PORT and DYNAMODB_URL');
});