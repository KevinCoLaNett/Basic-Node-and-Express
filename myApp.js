var express = require('express');
var app = express();
require('dotenv').config();

//--7--
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

//--1--
console.log("Hello World");

//--2 & 3--
app.get('/', (req, res)=>{
  res.sendFile(__dirname + "/views/index.html");
})

//--4--
app.use('/public', express.static( __dirname + "/public"));

//--5 & 6--
app.get('/json', (req, res)=>{
  if (process.env.MESSAGE_STYLE === "uppercase")
  {
    res.json({"message": "HELLO JSON"});
  } else {
    res.json({"message": "Hello json"});
  }
});



































 module.exports = app;
