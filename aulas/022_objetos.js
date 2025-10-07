
let produto = {
    nome: 'celular',
    preco: 2000,
    marca: 'samsung',
    cor: 'preto'
}

console.log(produto);
console.log(produto.nome);
console.log(produto.preco);
console.log(produto.marca);
console.log(produto.cor);

console.log(produto['nome']);
console.log(produto['preco']);
console.log(produto['marca']);
console.log(produto['cor']);

produto.preco = 3000;
console.log(produto);
produto.modelo = 'galaxy';
console.log(produto);

for (let chave in produto) {
    console.log(chave);
    console.log(produto[chave]);
}

let aluno = {
    nome: 'joao',
    sexo: 'masculino',
    idade: 32,
    curso: 'java',
    dados_da_mae : {
        telefone: '1234-5678',
        nome: 'maria',
    }, 
    boletim: [
        {materia: 'portugues',
         nota: 10,
         faltas: 6
        
        }
    ]
}





console.log(aluno);
console.log(aluno.dados_da_mae.telefone); //aluno.dados_da_mae.telefone;
console.log(aluno.boletim[1]);
