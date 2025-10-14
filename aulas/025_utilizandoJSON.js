const fs = require('fs');

//lendo arquivo json
const dados = fs.readFileSync('./exe/021.json', 'utf8');
//covertendo json para java script utilizando o parse
const objeto = JSON.parse(dados);
console.log(objeto);

