var express = require('express');
var app = express();

//--1--
console.log("Hello World");

//--2--
app.get('/', (req, res)=>{
  res.send('Hello Express');
})

































 module.exports = app;
