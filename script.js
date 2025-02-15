// script.js
function calculateFactorial() {
    const num = parseInt(document.getElementById("number").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(num) || num < 0) {
        resultDiv.textContent = "Please enter a valid positive integer.";
        return;
    }
    

    const iterativeResult = factorialIterative(num);

    resultDiv.textContent = `Iterative: ${iterativeResult}`;
}

function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// function factorialRecursive(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorialRecursive(n - 1);
//     }
// }