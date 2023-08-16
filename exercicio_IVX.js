let numero = parseFloat(prompt("Digite um número:"));
let soma = 0;

while (soma + numero < 500) {
    numero *= 3;
    soma += numero;
}

document.write(`O último valor calculado foi: ${numero}`);