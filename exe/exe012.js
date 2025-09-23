function valorPi(){
    let pi = 3.1415;
    return pi;
}

function calcularRaio(circuferencia) {
    return circuferencia / (2 * valorPi());
}

console.log(calcularRaio(100));