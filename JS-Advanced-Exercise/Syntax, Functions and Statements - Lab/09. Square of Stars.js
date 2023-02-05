function solve(n) {
    let matrix = new Array(n).fill("*").map(() => (Array(n).fill("*")))
    matrix.forEach(line => console.log(line.join(" ")))
}
solve(3)