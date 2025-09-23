const prompt = require('prompt-sync')();

function nome(nome ,sobrenome) {
    console.log(`Olá ${nome} ${sobrenome}`);
}
nome(prompt('Qual é o seu nome? '), prompt('Qual é o seu sobrenome? '));
nome(prompt('Qual é o seu nome? '), prompt('Qual é o seu sobrenome? '));
nome(prompt('Qual é o seu nome? '), prompt('Qual é o seu sobrenome? '));