alert("Boas vindas");

let nomeJogador = prompt("Digite seu nome");

let querJogar = confirm("Deseja jogar?");

if(querJogar) {

    alert("Boa Sorte, " + nomeJogador);

    const numeroSecreto = 7;
    let acertou = false;
    while (acertou === false) {
    



    let numeroDigitado = prompt("Digite um numero");
    numeroDigitado = Number(numeroDigitado);

    if(numeroDigitado < 1 || numeroDigitado > 10 || isNaN(numeroDigitado)) {

        alert("Número inválido! Digite de 1 a 10.");


    } else if(numeroSecreto == numeroDigitado) {

        alert("Parabéns, você acertou");
acertou = true
    } else if(numeroSecreto < numeroDigitado) {

        alert("É menor!");

    } else if(numeroSecreto > numeroDigitado) {

        alert("É maior!");

    }
    }/
} else {

    alert("Que pena! Até a próxima");

    
}

