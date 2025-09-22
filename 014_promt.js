const promt = require('prompt-sync')();

let nome = promt('Qual é o seu nome? ');
console.log(`Olá ${nome}`);


let dataDeNascimento = promt('Qual é seu ano de nascimento? ');
console.log(`Você nasceu em ${2025 - dataDeNascimento}`);

let fezaniversario  = promt ('vc ja fez aniversrio esse ano?');
if (fezaniversario == 'sim') {
    console.log('Parabens');
idade++;
}

console.log(`${nome} tem ${idade} anos`);
