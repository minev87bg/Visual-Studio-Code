function solve(arr) {
    return (arr.sort((a, b) => { return (a - b) }).slice(0, 2).join(" "))
}
solve([30, 15, 50, 5])