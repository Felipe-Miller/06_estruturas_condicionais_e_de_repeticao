const ladoA = parseFloat(prompt("Digite o valor do lado A:"));
const ladoB = parseFloat(prompt("Digite o valor do lado B:"));
const ladoC = parseFloat(prompt("Digite o valor do lado C:"));

// Verifica se os lados formam um triângulo
if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if (ladoA === ladoB && ladoB === ladoC) {
        document.write("Triângulo equilátero");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        document.write("Triângulo isósceles");
    } else {
        document.write("Triângulo escaleno");
    }
} else {
    document.write("Os lados fornecidos não formam um triângulo.");
}