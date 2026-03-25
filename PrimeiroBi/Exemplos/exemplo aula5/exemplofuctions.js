const funcao = function nomeFuncao() {
  console.log("Executando a função na const");
};

funcao();

function soma(valor1, valor2) {
  return valor1 + valor2;
}

const funcaoConsoleLog = (val1, val2)=> {
    if (val1 == undefined|| val2 == undefined){
      return 0
    }


  return val1 + val2
}
console.log(funcaoConsoleLog(2,3))

console.log(soma(5, 10));

function calculo(funcao1, funcao2) {
  return funcao() + funcao2();
}

console.log(soma(5, 10) + soma(5, 10));

//Exemplos operadores
const valorNumerico = 47;
const valorNumericoString = "47";

if (valorNumerico == valorNumericoString) {
  console.log("É igual!!!");
} else if (valorNumerico != valorNumericoString) {
  console.log("É diferente");
} else {
  console.log("Algo deu errado!!!");
}
