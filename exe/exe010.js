const prompt = require('prompt-sync')();
let base = prompt('Qual é a base? ');
let altura = prompt('Qual é a altura? ');


function area (base, altura) {
    let area = base * altura;
    return area;
}
console.log(`A área é ${area(base, altura)}`);