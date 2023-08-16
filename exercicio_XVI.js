const anoAtual = new Date().getFullYear(); 
const anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));

const idade = anoAtual - anoNascimento;

if (idade >= 16) {
    document.write("Você pode votar este ano!");
} else {
    document.write("Você não pode votar este ano.");
}


