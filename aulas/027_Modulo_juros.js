const juros_simples = (capital, taxa, tempo) => {
    const juros = captal * (taxa / 100) * tempo;
    const objretorno = {
        juros,
        total: captal + juros
    };
    return objretorno;

}

module.exports = {juros_simples};

const juros_composto = (capital, taxa, tempo) => {
    const montante = captal * ((1 + taxa / 100)) ** tempo;
    const objretorno = {
        capital: captal,
        taxa: taxa,
        tempo: tempo,
        juros: montante - captal,
        total: montante
    }
    return objretorno;

}