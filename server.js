"use strict"

let port = 3001;
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.listen(port, function(){
    console.log('Server is listening on: %s', port);
});