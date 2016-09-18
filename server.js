"use strict"

const log = console.log;
const port = 3001;
const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient
const mongoURL = 'mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge'
const app = express();
const db = require('monk')(mongoURL)
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// log(titles)
mongoClient.connect(mongoURL, function(err, db) {
  if (err) {
      log('There was an error connecting to Mongo!');
      log(err);
    return;
  } else {
    db.listCollections().toArray(function(err, collections){
      log(collections);
    });
    log('Connected to Mongo!');
  }
});

app.use(function(req,res,next){
    req.db = db;
    next();
});

  // app.use(function(req, res, next) {
  //     var err = new Error('Not Found');
  //     err.status = 404;
  //     next(err);
  // });


app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.get('/', function(req, res, next) {
  const db = req.db;
  const titles = db.get('Titles');  
  titles.find({},{},function(e,docs){
    log(docs)
})

app.listen(port, function(){
    console.log('Server is listening on: %s', port);
});