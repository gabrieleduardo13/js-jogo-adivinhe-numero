alert("Boas vindas!");

let nomeJogador = prompt("Digite seu nome: ");
let querJogar = confirm(nomeJogador + ", você quer jogar?"); // Cria a variável querJogar

if (querJogar) {
    alert("Boa sorte, " + nomeJogador + "!");

    const numeroSecreto = 7;
    // O parseInt garante que o texto digitado seja convertido para número
    let numeroDigitado = parseInt(prompt("Digite um número: "));

    // A verificação precisa ficar DENTRO do bloco if(querJogar) 
    // para conseguir acessar o numeroSecreto e o numeroDigitado
    if (numeroSecreto === numeroDigitado) {
        alert("Parabéns, " + nomeJogador + "! Você acertou o número.");
    } else if (numeroSecreto < numeroDigitado) {
        alert("O número secreto é menor que " + numeroDigitado + ". Tente novamente!");
    } else {   
        alert("O número secreto é maior que " + numeroDigitado + ". Que pena, " + nomeJogador + "! Até a próxima!");
    }
} else {
    alert("Que pena, " + nomeJogador + "! Até a próxima!");
}