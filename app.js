/**
 * Biblioteca para API's
 *
 *  Express - Biblioteca para criar aplicações em node no formato de API
 *  cors - Biblioteca para manipular as permissoes do protocolo HTTP
 *
 */

const express = require('express');
const cors = require('cors');

const app = express();

// Importação do middleware com req.header (CORS)
const { globalMiddleware } = require('./src/middlewares/globalMiddleware');

// Importação das rotas da api
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(globalMiddleware);
// Estabelece que as permissoes serao representadas pelo cors
app.use(cors());
app.use(routes);

app.listen(3000, () => {
  console.log('http://localhost:3000');
  console.log('server executando na porta 3000');
});
