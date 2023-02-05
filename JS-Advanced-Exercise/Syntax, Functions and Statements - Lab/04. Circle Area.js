function solve(input) {
    if (typeof input == "number") {
        let result = Math.pow(input, 2) * Math.PI
        console.log(result.toFixed(2))
    }
    else {
        let result = typeof input
        console.log(`We can not calculate the circle area, because we receive a ${result}.`)
    }
}
solve(5)