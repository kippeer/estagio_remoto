// fibonacci.js

// Função para verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
    // Função auxiliar para verificar se um número é um quadrado perfeito
    function isPerfectSquare(x) {
        let s = Math.sqrt(x);
        return s === Math.floor(s);
    }

    // Função para verificar se um número é um número de Fibonacci
    function checkFibonacci(n) {
        // Um número é um número de Fibonacci se e somente se um ou ambos
        // (5*n^2 + 4) ou (5*n^2 - 4) são quadrados perfeitos
        return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
    }

    // Verifica se o número é negativo, não pertence à sequência
    if (num < 0) {
        return false;
    }

    return checkFibonacci(num);
}

// Função principal
function main() {
    // Recebe o número do usuário via linha de comando
    const number = parseInt(process.argv[2], 10);

    if (isNaN(number)) {
        console.log("Por favor, informe um número válido.");
        return;
    }

    // Verifica se o número pertence à sequência de Fibonacci
    if (isFibonacci(number)) {
        console.log(`${number} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${number} não pertence à sequência de Fibonacci.`);
    }
}

// Executa o programa
main();
