const express = require('express')
const route = express.Router();


//req - recebe dados
//res - devolve dados 

route.get('/', (req, res, next) => {
  res.send('a')
  next();
})