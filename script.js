// script.js
function calculateFactorial() {
    const num = parseInt(document.getElementById("number").value);
    const resultDiv = document.getElementById("result");
    const method = document.querySelector('input[name="method"]:checked').value; // Get selected method

    if (isNaN(num) || num < 0) {
        resultDiv.textContent = "Please enter a valid positive integer.";
        return;
    } else if (num === 0) {
        resultDiv.textContent = "Please enter a positive integer (greater than 0).";
        return;
    }

    let result;
    if (method === "iterative") {
        result = factorialIterative(num);
        resultDiv.textContent = `Iterative: ${result}`;
    } else if (method === "recursive") {
        result = factorialRecursive(num);
        resultDiv.textContent = `Recursive: ${result}`;
    }
}

function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function factorialRecursive(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorialRecursive(n - 1);
    }
}
