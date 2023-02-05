function solve(input) {
    let sum = 0
    console.log(input.reduce((a, b) => a + b))
    for (el of input) {
        let inverseNum = 1 / el
        sum += inverseNum
    }
    console.log(sum)
    console.log(input.join(""))
}
solve([1, 2, 3])