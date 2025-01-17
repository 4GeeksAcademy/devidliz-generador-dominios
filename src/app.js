/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronombres = ["el", "la", "los", "las"];
const adjetivos = ["grande", "pequeño", "rapido", "lento"];
const sustantivos = ["perro", "gato", "casa", "coche"];
const extensiones = [".com", ".es", ".org"];

function generarDominios() {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = "";

  for (let i = 0; i < pronombres.length; i++) {
    for (let j = 0; j < adjetivos.length; j++) {
      for (let k = 0; k < sustantivos.length; k++) {
        for (let l = 0; l < extensiones.length; l++) {
          const dominio =
            pronombres[i] + adjetivos[j] + sustantivos[k] + extensiones[l];
          const listaul = document.createElement("ul");
          listaul.textContent = dominio;
          resultadosDiv.appendChild(listaul);
        }
      }
    }
  }
}
document
  .getElementById("generarBtn")
  .addEventListener("click", generarDominios);
