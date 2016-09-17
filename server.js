"use strict"

const log = console.log;
const port = 3001;
const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient
const mongoURL = 'mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge'
const app = express();

mongoClient.connect(mongoURL, function(err, db) {
  if (err) {
      log('There was an error connecting to Mongo!');
      log(err);
    return;
  } else {
    log('Connected to Mongo!');
  }
});


app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.get('/', function(req, res, next) {
  res.json('Welcome to my solution of the developer challenge!')
})

app.listen(port, function(){
    console.log('Server is listening on: %s', port);
});