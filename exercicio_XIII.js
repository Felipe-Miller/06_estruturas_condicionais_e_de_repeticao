const numero = parseInt(prompt("Digite um número:"));

if (numero >= 1) {
    console.log(`Números ímpares entre 1 e ${numero}:`);
    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
} else {
    console.log("Por favor, digite um número válido maior ou igual a 1.");
}