const estados = require('../tests/cidades.json');

exports.searchStateCity = (siglaInput = '') => {
  const cidades = new Array();

  estados.forEach((estado) => {
    if (estado.sigla === siglaInput.toUpperCase()) {
      estado.cidades.forEach((cidade) => {
        cidades.push(cidade.nome);
      });
    }
  });

  if (cidades <= 0) return false;
  return JSON.stringify(cidades);
};

exports.searchState = () => {
  const estadosArray = new Array();

  estados.forEach((estado) => {
    estadosArray.push({ name: estado.nome, uf: estado.sigla });
  });

  if (estadosArray <= 0) return false;
  return JSON.stringify(estadosArray);
};

exports.searchCity = (nomeCidade = '') => {
  const city = {};

  estados.forEach((estado) => {
    estado.cidades.forEach((cidade) => {
      if (cidade.nome.toLowerCase() === nomeCidade.toLowerCase()) city.nome = cidade.nome;
    });
  });

  if (city <= 0) return false;
  return JSON.stringify(city);
};
