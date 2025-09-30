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

app.get('/juro_simples', (req, res) => {
    res.render('juro_simples');
});

app.post('/juro_simples', (req, res) => {
    const capital = req.body.capital;
    const taxa = req.body.taxa;
    const tempo = req.body.tempo;
    const juro_simples = (capital * taxa * tempo) / 100;
    const total = capital + juro_simples;
    res.render('juro_simples', { capital, taxa, tempo, juro_simples, total });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});

