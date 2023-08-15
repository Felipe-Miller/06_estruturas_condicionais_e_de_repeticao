let numero = parseInt(prompt("Digite um número:"));

document.write("<p>O número " + numero + " é ");

if (numero <= 1) {
    document.write("não é primo.</p>");
} else {
    let ehPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }
    
    if (ehPrimo) {
        document.write("primo.</p>");
    } else {
        document.write("não é primo.</p>");
    }
}