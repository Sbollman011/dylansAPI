const request = require('request');
const $ = require('cheerio');
const express = require('express');
const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser');


const app  = express();

app.use(express.json());

app.get('/', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
    var homepageText = {
      text: "hellos",
      location: "Empty"
    } 
    res.send(homepageText);
  });

  app.listen((process.env.PORT || 5000));
