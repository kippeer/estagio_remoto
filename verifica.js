// Função para verificar a existência da letra 'a' e contar suas variantes
function verificarLetraA(str) {
    // Convertendo a string para minúsculas para facilitar a contagem
    const strLowerCase = str.toLowerCase();

    // Expressão regular para encontrar todas as variantes da letra 'a'
    const regex = /a|à|á|â|ã|ä|å/g;

    // Contando a quantidade de vezes que as variantes da letra 'a' ocorrem
    const quantidade = (strLowerCase.match(regex) || []).length;

    // Verificando se alguma variante da letra 'a' existe
    const existe = quantidade > 0;

    // Exibindo os resultados
    if (existe) {
        console.log(`A letra 'a' e suas variantes ocorrem ${quantidade} vez(es) na string.`);
    } else {
        console.log("A letra 'a' e suas variantes não foram encontradas na string.");
    }
}

// Função principal
function main() {
    // Recebe a string do usuário via linha de comando
    const input = process.argv[2];

    if (!input) {
        console.log("Por favor, informe uma string.");
        return;
    }

    // Verifica a letra 'a' e suas variantes na string
    verificarLetraA(input);
}

// Executa o programa
main();
