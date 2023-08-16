const totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
const votosBrancos = parseInt(prompt("Digite o número de votos em branco:"));
const votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
const votosValidos = parseInt(prompt("Digite o número de votos válidos:"));

if (votosBrancos + votosNulos + votosValidos <= totalEleitores) {
    const percentualBrancos = (votosBrancos / totalEleitores) * 100;
    const percentualNulos = (votosNulos / totalEleitores) * 100;
    const percentualValidos = (votosValidos / totalEleitores) * 100;

    document.write(`Percentual de votos em branco: ${percentualBrancos.toFixed(2)}%<br>`);
    document.write(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%<br>`);
    document.write(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
} else {
    document.write("A soma dos votos excede o total de eleitores.");
}