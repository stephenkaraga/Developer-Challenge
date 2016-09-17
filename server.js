"use strict"

let port = 3001;
const express = require('express');

var app = express();

app.listen(port, function(){
    console.log('Server is listening on: %s', port);
});