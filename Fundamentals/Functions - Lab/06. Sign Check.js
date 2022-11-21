function solve(a, b, c) {
    let arr = [a, b, c]
    let neg = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) { neg++ }
    }
    if (neg % 2 == 1) { console.log("Negative") } else { console.log("Positive") }
}
solve(5,
    -12,
    -15)