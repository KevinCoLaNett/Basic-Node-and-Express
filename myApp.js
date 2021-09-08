var express = require('express');
var app = express();

//--1--
console.log("Hello World");

//--2 & 3--
app.get('/', (req, res)=>{
  res.sendFile(__dirname + "/views/index.html");
})


































 module.exports = app;
