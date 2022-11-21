function solve(a, b) {
    factorial = n => (n < 2) ? 1 : factorial(n - 1) * n
    console.log((factorial(a) / factorial(b)).toFixed(2))
}
solve(5, 2)