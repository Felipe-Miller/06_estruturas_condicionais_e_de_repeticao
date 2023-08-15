let numeroDia = parseInt(prompt("Escolha um número de 1 a 7 para representar o dia da semana:"));

if (numeroDia === 1) {
    document.write("Domingo");
} else if (numeroDia === 2) {
    document.write("Segunda-feira");
} else if (numeroDia === 3) {
    document.write("Terça-feira");
} else if (numeroDia === 4) {
    document.write("Quarta-feira");
} else if (numeroDia === 5) {
    document.write("Quinta-feira");
} else if (numeroDia === 6) {
    document.write("Sexta-feira");
} else if (numeroDia === 7) {
    document.write("Sábado");
} else {
    document.write("Por favor, insira um número de 1 a 7!");
}