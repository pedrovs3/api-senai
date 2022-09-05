const { Router } = require('express');
const cors = require('cors');

const route = Router();
const rootController = require('./src/controllers/rootController');

// Rota padrao da aplicaçao
// Listagem de estados
route.get('/estados', cors(), rootController.index);
route.get('/estados/:initials', cors(), rootController.cities);
route.get('/estados/:initials/:city', cors(), rootController.citySearch);

// route.post('/post', rootController.post);

module.exports = route;
