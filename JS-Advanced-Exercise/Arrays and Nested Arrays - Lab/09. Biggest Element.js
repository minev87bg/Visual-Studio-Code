function solve(input) {
    i = 0
    while (isNaN(Math.max(...input.flat(i)))) {
        i++
    }
    return (Math.max(...input.flat(i)))
}
solve([[[20, 50, 10],
[8, 33, 145]]])