const express = require('express');
const route = express.Router();

//req - recebe dados
//res - devolve dados
route.get('/', (req, res, next) => {
  res.send({
    title: 'api Test',
    data: '01/09',
  });
});

module.exports = route;
