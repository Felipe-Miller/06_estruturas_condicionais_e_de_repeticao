const turno = prompt("Em que turno você estuda? Digite 'M' para matutino, 'V' para manhã ou 'N' para noite:").toUpperCase();

switch (turno) {
    case 'M':
        alert("Bom dia!");
        break;
    case 'V':
        alert("Boa tarde!");
        break;
    case 'N':
        alert("Boa noite!");
        break;
    default:
        alert("Valor inválido!");
}