const request = require('request');
const $ = require('cheerio');
const express = require('express');
const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser');


const app  = express();

app.use(express.json());

var user_id = '';
var token = '';
var geo = '';

app.get('/', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
   res.set('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
    var homepageText = {
      text: "plase",
      location: "please"
    } 
    res.send(homepageText);
  });

  app.post('/',(req, res) => {
    var textR= req.body.user;
    locationR = req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    res.end("yes");
  });

  app.get('/api/users', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
   res.set('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
    var homepageText = {
      user_id: user_id,
      token: token,
      geo: geo
      
    } 
    res.send(homepageText);
  });

app.post('/api/users', function(req, res) {
   user_id = req.body.id;
   token = req.body.token;
   geo = req.body.geo;

  res.send(user_id + ' ' + token + ' ' + geo);
});
  app.listen((process.env.PORT || 5000));
