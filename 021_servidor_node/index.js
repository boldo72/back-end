//criando constante express
const express = require('express');
const app = express();



app.get('/',  (req, res) => {
    res.send('Olá Mundo!');
});

const usuario = ['mauro', 'joao', 'pedro' , 'maria'];
app.get('/usuarios', (req, res) => {
    let html = '<h1>Lista de usuários:</h1>';
    html += '<ul>';
    for (let usuarioatual of usuario) {
        html += `<li>${usuarioatual}</li>`;
    }
    html += '</ul>';
    res.send(html);
})

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuarioSelecionado = usuario[id];
    let html = `<h1>Usuário ${id}</h1>`;
    if (usuarioSelecionado) {
        res.send('usuario não emcontrado ')
    }else {
        res.send(`visualizando o perfil do id ${id} - seu nome e ${usuarioSelecionado}`);
    }
    res.send(html);
})

app.get('/soma/:n1/:n2', (req, res) => {
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
    const resultado = n1 + n2;
    res.send(`A soma de ${n1} e ${n2} e ${resultado}`);
})

app.get('/menu', (req, res) => {
    let html =`
    <h1>Menu:</h1>
    <a href="/"><li>🏀 Home</li></a>
    <a href="/sobre"><li>sobre</li></a>
    <a href="/usuario"><li> usuario</li></a>
    <a href="/usuario/1"><li> usuario 1</li></a>
    <a href="/usuario/7"><li> usuario invalido</li></a>
    <a href="/soma/16/48"><li> soma </li></a>
    
    
    
    
    
    `;

    res.send(html);
})



const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});
