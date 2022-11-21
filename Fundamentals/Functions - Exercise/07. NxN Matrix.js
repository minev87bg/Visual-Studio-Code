function solve(num) {
    let matrix = []
    for (let i = 0; i < num; i++) {
        matrix[i] = Array(`${num}`)
    }
    for (i = 0; i < matrix.length; i++) {
        console.log(matrix.join(" "))
    }
}
solve(7)