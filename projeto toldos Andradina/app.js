const express = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');


const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(expressLayouts);
app.set('layout', 'layouts/principal');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/sobre', (req, res) => {
    res.render('sobre');
});

app.get('/orcamento', (req, res) => {
    res.render('orcamento');
});

app.get('/contato', (req, res) => {
    res.render('contato');
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});

