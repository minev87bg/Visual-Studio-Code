function solve(input) {
    let sorted = input.sort((a, b) => { return a - b })
    //console.log(sorted.slice(Math.floor(sorted.length / 2), sorted.length))
    return sorted.slice(Math.floor(sorted.length / 2),)
}
solve([3, 19, 14, 7, 2, 19, 6])