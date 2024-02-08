export const filterBy = (data, filterValue) => {
  if (filterValue === ""){
    return data
  }
  const filterString = filterValue;
  const filteredData = data.filter(item => {
    return item.facts.tempoDeVida === parseInt(filterString) || item.facts.facilidadeCriacao === filterString || item.facts.capturaPresas === filterString;
  });

  return filteredData;
};

export const sortBy = (data, itemSelecionado, order) => {
  if (itemSelecionado === "" || order === ""){
    return data
  }
  data.sort((a, b) => {
    if (itemSelecionado === "alturaPlanta" || itemSelecionado === "precoPlanta") {
      return a.facts[itemSelecionado] - b.facts[itemSelecionado];
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  if (order === "desc") {
    data.reverse();
  }

  return data;
};

export const calculaMediaVida = (data) => {
  const soma = data.reduce(
    function (acumulador, item) {
      return acumulador + item.facts.tempoDeVida
    }, 0
  );
  const media = soma / data.length;
  return media.toFixed(0)
}

export const calculaMediaAltura = (data) => {
  const soma = data.reduce(
    function (acumulador, item) {
      return acumulador + item.facts.alturaPlanta
    }, 0
  );
  const media = soma / data.length;
  return media.toFixed(0)
}

export default sortBy
