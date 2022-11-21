function solve(arr1, arr2) {
    let bombNumber = arr2[0]
    let bombPower = arr2[1]
    let start = 0
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == bombNumber) {
            if (i - bombPower < 0) { start = 0 } else { start = i - bombPower }
            arr1.splice(start, bombPower * 2 + 1); i = 0
        }
    }
    console.log(arr1.reduce((a, b) => { return a + b }, 0))
}
solve([1, 2, 2, 4, 2, 2, 2, 9, 4],
    [4, 2])