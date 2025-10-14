let funcionario = {
    nome: 'reinaldo',
    salario: 5000,
    idade: 40,
    setor: 'RH'
}

//let salario = funcionario.salario * 1.1;
//let idade = funcionario.idade;


let { salario, idade, setor } = funcionario;

console.log(salario);
console.log(idade);
console.log(setor);

