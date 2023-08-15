let altura = parseFloat(prompt("Digite a altura da pessoa em metros:"));

let sexo = parseInt(prompt("Digite o sexo da pessoa (1 para feminino, 2 para masculino):"));

let pesoIdeal;

if (sexo === 1) {
    pesoIdeal = (62.1 * altura) - 44.7;
    document.write("O peso ideal para uma mulher com altura de " + altura + " metros é: " + pesoIdeal.toFixed(2) + " kg");
} else if (sexo === 2) {
    pesoIdeal = (72.7 * altura) - 58;
    document.write("O peso ideal para um homem com altura de " + altura + " metros é: " + pesoIdeal.toFixed(2) + " kg");
} else {
    document.write("Sexo não reconhecido. Por favor, insira 1 para feminino ou 2 para masculino.");
}

