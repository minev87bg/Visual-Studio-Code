function solve(a, b) {
    let arr = [1, 1]
    let sum = 0
    let num = 0
    for (let i = 2; arr.length < a; i++) {
        sum = 0
        for (let x = b; x > 0; x--) {
            if (isNaN(arr[i - x])) { num = 0 } else { num = arr[i - x] }
            sum += num
        }
        arr.push(sum)
    }
    console.log(arr.join(" "))
}
solve(8, 2)