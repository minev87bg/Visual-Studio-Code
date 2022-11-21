function solve(a, b, c) {
    function sum(a, b) { return a + b }
    function sub(d, e) { return sum(a, b) - c }
    console.log(sub())
}
solve(23,
    6,
    10)