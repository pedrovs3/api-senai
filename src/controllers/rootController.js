// req - recebe dados
// res - devolve dados
exports.index = (req, res) => {
  res.json({
    title: 'api Test',
    data: '01/09',
  });
};

exports.post = (req, res) => {
  res.send(req.body);
};
