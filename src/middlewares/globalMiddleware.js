exports.globalMiddleware = (req, res, next) => {
  // Permite especificar quem serao os IP's que podem acessar a API
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Permite especificar quais serao os verbos (metodos) que a API irá reconhecer
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  next();
};
