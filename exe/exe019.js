

let serie = {
    titulo: 'La Casa de Papel',
    diretor: 'Jesús Colmenar',
    genero: ['Drama', 'Suspense', 'Thriller', 'Assalto', 'Policial'],
    data_de_lançamento: '2 de maio de 2017',
    nr_temporadas: '3 (5 partes)',
    episodios: [
        { temporada: '1, parte 1', nr_episodio: '4', titulo: 'Caballo de Troya', duracao: '50 min' },
        { temporada: '1, parte 1', nr_episodio: '9', titulo: 'El que la sigue la consigue', duracao: '45 min' },
        { temporada: '1, parte 4', nr_episodio: '10', titulo: 'Se acabaron las máscaras', duracao: '48 min' }
    ]
}
console.log(serie.episodios[2]);


