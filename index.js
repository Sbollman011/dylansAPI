const request = require('request');
const $ = require('cheerio');
const express = require('express');
const fs = require('fs');
const https = require('https');

const app  = express();

app.get('/', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    var homepageText = {
      text: "hello",
      location: ""
    } 
    res.send(homepageText);
  });

  app.listen((process.env.PORT || 5000));
