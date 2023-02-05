function solve(arr) {
    let n = 0
    let result = []
    for (el of arr) {
        if (el >= n) { n = el; result.push(el) }
    }
    return (result)
}
solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])