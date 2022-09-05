// req - recebe dados
// res - devolve dados
const { searchState, searchStateCity, searchCity } = require('../models/states');

exports.index = async (req, res) => {
  const estados = searchState();

  if (estados) {
    res.status(200).json(JSON.parse(estados));
  } else {
    res.status(400).json('Nenhum item encontrado');
  }
};

exports.cities = async (req, res) => {
  const cidades = searchStateCity(req.params.initials);

  if (cidades) {
    res.status(200).json(JSON.parse(cidades));
  } else {
    res.status(400).json('Nenhum item encontrado');
  }
};

exports.citySearch = async (req, res) => {
  const city = searchCity(req.params.city);
  console.log(city);

  if (city) {
    res.status(200).json(JSON.parse(city));
  } else {
    res.status(400).json('Nenhum item encontrado');
  }
};
