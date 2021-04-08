const request = require('request');
const $ = require('cheerio');
const express = require('express');
const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser');


const app  = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    var homepageText = {
      text: "hello",
      location: ""
    } 
    res.send(homepageText);
  });

  app.listen((process.env.PORT || 5000));
