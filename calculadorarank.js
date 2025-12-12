// 1. Criamos a função que faz tudo
function calcularRank(vitorias, derrotas) {
    // Calcula o saldo
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de decisão para descobrir o nível
    // (Baseado na tabela padrão do desafio)
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        // Se for maior ou igual a 101
        nivel = "Imortal";
    }

    // Retorna a frase final
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// 2. Aqui nós testamos a função
// Vamos simular 85 vitórias e 5 derrotas (Saldo deve ser 80 -> Ouro)
let resultado = calcularRank(85, 5);

// 3. Exibimos o resultado no terminal
console.log(resultado);