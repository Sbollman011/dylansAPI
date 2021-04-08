const request = require('request');
const $ = require('cheerio');
const express = require('express');
const fs = require('fs');
const https = require('https');

const app  = express();

app.get('/', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    var homepageText ="<p1 style = 'font-size: 62px;' >Welcome to Rapid Stock Checkers API. <p1> <br/><br/><br/> <p style='color: #2699FB; text-decoration: underline; font-size: 32;'> Buy Now pages url: https://www.retailapiservice.com/buylinks <br/><br/>"+ 
    "Best Buy API url: https://www.retailapiservice.com/bestbuy<p> <p style='color: #2699FB; text-decoration: underline; font-size: 32;'> Database url: https://www.retailapiservice.com/productlist <br/><br/>"
    res.send(homepageText);
  });

  app.listen((process.env.PORT || 5000));
