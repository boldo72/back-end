
module.exports = {
    celsiusParaFahrenheit: function(celsius) {
        return (celsius * 9/5) + 32;
    }
}

const celsiusParaFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9/5) + 32;
    const objeto = {
    celsius: celsius
}
return objeto
}

const milhasParaMetros = (milhas) => {
    return milhas * 1609.34;
    const objeto = {
        milhas: milhas
    }
    return objeto
}

module.exports = {
    celsiusParaFahrenheit,
    milhasParaMetros
}