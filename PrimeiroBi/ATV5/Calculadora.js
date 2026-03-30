const ValorConta = 100
const percentualGorjeta = 15
const ValorGorjeta = (ValorConta * percentualGorjeta) /100
const ValorTotal = ValorConta + ValorGorjeta

console.log(`Valor da conta: R$${ValorConta.toFixed(2)}, Gorjeta (${percentualGorjeta}%): R$${ValorGorjeta.toFixed(2)}, Total a pagar: R$${ValorTotal.toFixed(2)}`)



