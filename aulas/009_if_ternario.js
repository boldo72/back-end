const aprovado = true;
let mensagem ='';
if (aprovado == true) {
    mensagem = "Parabéns, você foi aprovado!";
} else {
    mensagem = "Que pena, você foi reprovado!";
}
console.log(mensagem);

//operador ternário
mensagem = aprovado ? "Parabéns, você foi aprovado!" : "Que pena, você foi reprovado!";
console.log(mensagem);