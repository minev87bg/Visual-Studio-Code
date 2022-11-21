function rot(arr) {
    let n = arr[arr.length - 1]
    arr.pop()
    let rem
    for (let i = 1; i <= n; i++) {
        rem = arr.pop()
        arr.unshift(rem)
    }
    console.log(arr.join(" "))
}
rot(['1', '2', '3', '4', '2'])