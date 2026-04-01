// alert("Deu Boa!")

console.log(document);

const titulo = document.querySelector("#titulo-principal");

console.log(titulo);

titulo.textContent = "Ola ";

function criarElementos() {
  // alert("Funcionou");
  const container = document.getElementById("container");
  // container.style.backgroundColor = "red";

  const h1 = document.createElement("h1");
  h1.textContent = "Titulo 3";

  const paragrafo = document.createElement("p");
  paragrafo.textContent = "Texto aleatório";

  container.appendChild(h1);
  container.appendChild(paragrafo);

  container.removeChild(titulo);
}

function criarTarefa(event) {
  event.preventDefault();

  const valorInput = event.target.children[1].value;

  const container = document.getElementById("container");

  const p = document.createElement("p");

  p.textContent = valorInput;

  container.appendChild(p);

  console.log();
}
