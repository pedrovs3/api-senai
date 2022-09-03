const express = require('express');

const route = express.Router();
const rootController = require('./src/controllers/rootController');

// Rota padrao da aplicaçao
route.get('/', rootController.index);
route.post('/post', rootController.post);

module.exports = route;
