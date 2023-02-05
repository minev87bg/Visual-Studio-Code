function solve(input) {
    let sum1 = 0
    let sum2 = 0
    input.forEach((el, i) => { sum1 += el[i] })
    input.forEach((el, i) => { sum2 += el.reverse()[i] })
    console.log(`${sum1} ${sum2}`)
}
solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]])