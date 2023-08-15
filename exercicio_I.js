let idadeMotorista = prompt("Qual sua idade?");
idadeMotorista = parseInt(idadeMotorista);

if (idadeMotorista >= 18) {
    document.write("Pode dirigir!");
} else {
    document.write("Você não pode dirigir!");
}