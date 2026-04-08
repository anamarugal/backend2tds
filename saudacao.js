//Declaração da função com parâmetro
function saudacao(nomeJogador) {
    console.log("Bem vindo ao jogo, " + nomeJogador + "!")
};

saudacao("Alex");

//Função que recebe um valor, soma 1 número e retorna
function subirDeNivel(nivelAtual) {
    return nivelAtual + 1
};

let meuNivel = 10; 

let nivelAtualizado = subirDeNivel(meuNivel);
console.log("Seu nível atualizado é: " + nivelAtualizado);

//Função que soma 2 números
function soma(numero1, numero2) {
    return numero1 * numero2 
};

console.log(soma(5,3));

function verificarPar(numero) {
    if (numero % 2 === 0) {
        return "O número é par"
    }  else {
        return "O número é impar"
    }
};
console.log(verificarPar(3));