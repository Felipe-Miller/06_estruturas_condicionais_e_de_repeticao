let numero = 10;
let soma = 0;

do {
    soma += numero;
    numero++;
} while (numero <= 100);

document.write("A soma de todos os números entre 10 e 100 é: " + soma);