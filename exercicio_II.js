let idadeMotorista = prompt("Digite a idade do motorista:");
let possuiCNH = prompt("O motorista possui habilitação? (Digite 'sim' ou 'não')");

idadeMotorista = parseInt(idadeMotorista);

if (idadeMotorista >= 18 && possuiCNH === 'sim') {
    document.write("Pode dirigir!");
} else {
    document.write("Não pode dirigir!");
}
