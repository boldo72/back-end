const  funcoesJuros = require('./027_Modulo_juros');

const resultadoJuroSimples = funcoesJuros.juros_simples(1000, 10, 1);
console.log(resultadoJuroSimples);

const resultadoJuroComposto = funcoesJuros.juros_composto(1000, 10, 1);
const {juros, total} = resultadoJuroComposto;

console.log(resultadoJuroComposto);