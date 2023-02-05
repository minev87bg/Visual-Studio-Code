function solve(input) {
    let result = []
    input.forEach((el, i) => { if (i % 2 != 0) { result.push(Number(el) * 2) } })
    return result.reverse()
}
solve([10, 15, 20, 25])