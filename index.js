// 1. Pedindo os dados (Interativo)
let nome = ("Herói número 2");
let xp = (2200);
let nivel = "";

// 2. A Lógica
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
} else if (xp <= 5000) {
    nivel = "Prata	";
} else if (xp <= 7000) {
    nivel = "Ouro";
} else if (xp <= 8000) {
    nivel = "Platina";
} // <--- Onde faltava a chave!
else if (xp <= 9000) {
    nivel = "Ascendente";
} else if (xp <= 10000) {
    nivel = "Imortal";
} else {
    // Se não é nenhum dos anteriores, com certeza é maior que 10.000
    nivel = "Radiante";
}

// 3. A Saída final (O resultado)
console.log("O Herói de nome " + nome + " está no nível de " + nivel);


