function solve(num) {
    let arr = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
    arr.fill("%", 0, num / 10)
    console.log(`${num}% [${arr.join("")}]\nStill loading...`)
}
solve(30)