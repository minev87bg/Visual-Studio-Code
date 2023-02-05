function rot(arr, n) {
    let rem
    for (let i = 1; i <= n; i++) {
        rem = arr.pop()
        arr.unshift(rem)
    }
    console.log(arr.join(" "))
}
rot(['1',
    '2',
    '3',
    '4'],
    2)