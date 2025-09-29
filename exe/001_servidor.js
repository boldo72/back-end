//criando constante express
const express = require('express');
const app = express();



app.get('/',  (req, res) => {
    res.send('bem vindo a nossa loja de eletronicos!');
});

const produto = ['telefone', 'notebook', 'tablet' , 'smartphone'];
app.get('/produtos', (req, res) => {
    let html = '<h1>Lista de produtos:</h1>';
    html += '<ul>';
    for (let produtoatual of produto) {
        html += `<li>${produtoatual}</li>`;
    }
    html += '</ul>';
    res.send(html);
})

app.get('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const produtoSelecionado = produto[id];
    let html = `<h1>produto ${id}</h1>`;
    if (usuarioSelecionado) {
        res.send('produto não emcontrado ')
    }else {
        res.send(`visualizando o perfil do id ${id} - seu nome e ${produtoSelecionado}`);
    }
    res.send(html);
})

app.get('/total/:id_produto/:preco/:qtde:', (req, res) => {
    const id = req.params.id;
    const preco = req.params.preco;
    const qtde = req.params.qtde;
    const produtoSelecionado = produto[id];
    let html = `<h1>produto ${id}</h1>`;
    res.send(html) ;


})



const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});
