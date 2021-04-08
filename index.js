const request = require('request');
const $ = require('cheerio');
const express = require('express');
const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser');


const app  = express();

app.use(express.json());

let textR = "hello";
let locationR ="lo";

app.get('/', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
   res.set('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
    var homepageText = {
      text: textR,
      location: locationR
    } 
    res.send(homepageText);
  });

  app.post('/',(req, res) => {
    var textR= req.body.user;
    locationR = req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    res.end("yes");
  });

  /*app.get('/api/users', function(req, res) {
    var user_id = req.param('id');
    var token = req.param('token');
    var geo = req.param('geo');

    res.send(user_id + ' ' + token + ' ' + geo);
});*/

app.post('/api/users', function(req, res) {
  var user_id = req.body.id;
  var token = req.body.token;
  var geo = req.body.geo;

  res.send(user_id + ' ' + token + ' ' + geo);
});
  app.listen((process.env.PORT || 5000));
