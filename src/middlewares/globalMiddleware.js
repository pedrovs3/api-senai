exports.globalMiddleware = (req, res, next) => {
  req.header('Access-Control-Allow-Origin', '*');

  next();
};
