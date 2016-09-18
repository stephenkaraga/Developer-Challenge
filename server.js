"use strict"

const log = console.log;
const port = 3001;
const mongo = require('mongodb')
const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient
const mongoURL = 'mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge'
const app = express();
const db = require('monk')(mongoURL)
const path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// mongoClient.connect(mongoURL, function(err, db) {
//   if (err) {
//       log('There was an error connecting to Mongo!');
//       log(err);
//     return;
//   } else {
//     db.listCollections().toArray(function(err, collections){
//       log(collections);
//      titles = db.get('Titles'); 
//      titles.find({}, function(e,docs){
//         var json = JSON.parse(docs);
//         log(docs)
//         // res.render('index');
//     });
//     });
//     log('Connected to Mongo!');
//   }
// });


// app.use(express.static(__dirname));

app.use(function(req,res,next){
    req.db = db;
    next();
});


app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
var globalObj = {};
const titles = db.get('Titles'); 
  // res.render('index'); 
  titles.find({}, function(e,docs){
    // var json = JSON.parse(docs);
    globalObj.docs = docs;
    log(docs)
    // res.render('index');
});


app.get('/', function(req, res, next) {
  res.render('index', {docs:globalObj.docs});
});



app.listen(port, function(){
    console.log('Server is listening on: %s', port);
});