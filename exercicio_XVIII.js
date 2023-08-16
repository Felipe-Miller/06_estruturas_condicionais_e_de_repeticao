const precoTabela = parseFloat(prompt("Digite o preço de tabela do produto:"));
const numeroParcelas = parseInt(prompt("Digite o número de parcelas desejado:"));

let valorParcela = 0;
let precoTotal = 0;

if (numeroParcelas === 1) {
    valorParcela = precoTabela - (precoTabela * 0.025);
} else if (numeroParcelas >= 2 && numeroParcelas <= 5) {
    valorParcela = precoTabela;
} else if (numeroParcelas >= 6 && numeroParcelas <= 10) {
    valorParcela = precoTabela * 1.06;
} else if (numeroParcelas >= 11 && numeroParcelas <= 15) {
    valorParcela = precoTabela * 1.13;
}

precoTotal = valorParcela * numeroParcelas;

console.log(`Valor de cada parcela: R$${valorParcela.toFixed(2)}`);
console.log(`Preço total da compra: R$${precoTotal.toFixed(2)}`);