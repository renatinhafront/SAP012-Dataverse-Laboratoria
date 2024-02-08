import { filterBy, sortBy, calculaMediaVida, calculaMediaAltura } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

// console.log(fakeData);

describe('FilterBy', () => {

  it('Esperado que o tempo de vida seja `2`', () => {
    expect(filterBy(fakeData, 2)).toHaveLength(1);
  });

  it('Esperado que o tipo de captura de presas `Ativa`', () => {
    expect(filterBy(fakeData, "Ativa")).toHaveLength(2);
  });

  it('Esperado que a facilidadede criação seja `Fácil`', () => {
    expect(filterBy(fakeData, "Fácil")).toHaveLength(3);
  });

  it('Esperado que retorne a mesma lista quando filtro `Vazio`', () => {
    expect(filterBy(fakeData, "")).toHaveLength(3);
  });

});


describe('SortBy', () => {

  it('Esperado que o menor preco seja `5`', () => {
    expect(fakeData).toEqual(sortBy(fakeData, "precoPlanta", "asc"));
  });

  it('Esperado que o maior preco seja `9`', () => {
    expect(fakeData).toEqual(sortBy(fakeData, "precoPlanta", "desc"));
  });

  it('Esperado que a menor altura seja `15`', () => {
    expect(fakeData).toEqual(sortBy(fakeData, "alturaPlanta", "asc"));
  });

  it('Esperado que a maior altura seja `45`', () => {
    expect(fakeData).toEqual(sortBy(fakeData, "alturaPlanta", "desc"));
  });

  it('Esperado que nome seja A-Z `Dionaea muscipula`', () => {
    expect(fakeData).toEqual( sortBy(fakeData, "name", "asc"));
  });

  it('Esperado que nome seja Z-A `Nepenthes Merrilliana`', () => {
    expect(fakeData).toEqual(sortBy(fakeData, "name", "desc"));
  });

  it('Esperado que nome seja Z-A `Nepenthes Merrilliana`', () => {
    expect(fakeData).toEqual(sortBy(fakeData, "", ""));
  });
});


describe('CalculaMediaVida', () => {

  it('Espera que o tempo médio de vida seja `3`', () => {
    expect(calculaMediaVida(fakeData)).toBe("3");
  });
});

describe('CalculaMediaAltura', () => {

  it('Esperado que a altura média de vida seja `30`', () => {
    expect(calculaMediaAltura(fakeData)).toBe("30");
  });
});
