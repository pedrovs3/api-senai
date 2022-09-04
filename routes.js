const { Router } = require('express');

const route = Router();
const rootController = require('./src/controllers/rootController');

// Rota padrao da aplicaçao
route.get('/', rootController.index);
route.post('/post', rootController.post);

module.exports = route;
