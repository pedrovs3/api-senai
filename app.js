/**
 * Biblioteca para API's
 *
 *  Express - Biblioteca para criar aplicações em node no formato de API
 *  cors - Biblioteca para manipular as permissoes do protocolo HTTP
 *  body-parser - Biblioteca que permite manipular o corpo do protocolo HTTP
 *
 */

const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());
// const routes = require('./routes');

// app.use(routes)

// app.listen(3000, ()=>{
//   console.log('http://localhost:3000')
//   console.log('server executando na porta 3000')
// })

app.use((req, res, next) => {
  req.headers
})