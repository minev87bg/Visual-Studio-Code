function solve(a, b) {
    let arr = [1]
    let sum = 0
    let num = 0
    for (let i = 1; arr.length < a; i++) {
        sum = 0
        for (let x = b; x > 0; x--) {
            if (isNaN(arr[i - x])) { num = 0 } else { num = arr[i - x] }
            sum += num
        }
        arr.push(sum)
    }
    //console.log(arr)
    return arr
}
solve(2, 1)