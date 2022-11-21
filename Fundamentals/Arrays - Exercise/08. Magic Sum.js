function magic(arr, n) {
    let pair = []
    for (let i = 0; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[i] + arr[x] == n) { pair.push(arr[i], arr[x]); console.log(pair.join(" ")); pair = [] }
        }
    }
}
magic([14, 20, 60, 13, 7, 19, 8],
    27)