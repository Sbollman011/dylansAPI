const request = require('request');
const $ = require('cheerio');
const express = require('express');
const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser');


const app  = express();

app.use(express.json());

var text= '';
var location1 = '';
var location2 = '';

app.get('/dylan', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
   res.set('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
    var homepageText = {
      text: text,
      location1: location1,
    } 
    res.send(homepageText);
  });

  app.post('/dylan',(req, res) => {
    text = req.body.text;
    location1 = req.body.location1;
   });

   app.get('/steven', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
   res.set('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
    var homepageText = {
      text: text,
      location2: location2
    } 
    res.send(homepageText);
  });

  app.post('/steven',(req, res) => {
    text = req.body.text;
    location2 = req.body.location2
   });

  app.listen((process.env.PORT || 5000));
