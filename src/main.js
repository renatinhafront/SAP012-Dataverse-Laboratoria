import { renderItems, renderFilter } from './view.js';
import data from './data/dataset.js';
import { sortBy, filterBy, calculaMediaVida, calculaMediaAltura } from './dataFunctions.js';


//selectors html
const root = document.querySelector("#root");
const selectSort = document.querySelector("#select-sort");
const selectOrder = document.querySelector("#select-order");
const selectSubFilter = document.getElementById("select-subFilter");
const selectFilter = document.getElementById("select-filter");
const button = document.querySelector("#button-clear");
const mediaVida = document.querySelector(".mediaVida");
const mediaAltura = document.querySelector(".mediaAltura");
const footer = document.querySelector("footer");

//listerns
selectOrder.addEventListener('change', function () {
  ordenarEfiltrar()
});

selectFilter.addEventListener('change', function (event) {
  selectSubFilter.innerHTML = renderFilter(event.target.value)
  ordenarEfiltrar()
});

selectSubFilter.addEventListener('change', function () {
  ordenarEfiltrar()
});

selectSort.addEventListener('change', function () {
  ordenarEfiltrar()
});

button.addEventListener('click', function () {
  root.innerHTML = renderItems(data);
  selectFilter.value = '';
  selectSubFilter.value = '';
  selectSort.value = '';
  selectOrder.value = '';
});

document.addEventListener("DOMContentLoaded", function () {
  mediaVida.innerHTML = calculaMediaVida(data);
  mediaAltura.innerHTML = calculaMediaAltura(data);
});

//functions
function ordenarEfiltrar() {
  const meuDataSetFiltrado = filterBy(data, selectSubFilter.value);
  const meuDataSetOrdenado = sortBy(meuDataSetFiltrado, selectSort.value, selectOrder.value);

  root.innerHTML = renderItems(meuDataSetOrdenado);
  mediaAltura.innerHTML = calculaMediaAltura(meuDataSetOrdenado);
  mediaVida.innerHTML = calculaMediaVida(meuDataSetOrdenado);
}

//initialize
root.innerHTML = renderItems(data);

selectSubFilter.value = ""


const novoParagrafo = document.createElement("p");
const texto = document.createTextNode("Feito com ♥ por Renata Saraiva e Thaysa Borges");
novoParagrafo.appendChild(texto);
footer.appendChild(texto);
