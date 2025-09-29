function calcularComissao(valor, percentual) {
    let comissao = valor * percentual / 100;
    return comissao;
}

let comissaoRetornada;
comissaoRetornada = calcularComissao(1000, 10);

let salario = 3000;
salario = salario + comissaoRetornada;
console.log(salario);