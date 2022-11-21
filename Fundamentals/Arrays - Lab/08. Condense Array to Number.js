function condense(arr) {
    let arr1 = []
    while (arr.length != 1) {
        for (let i = 0; i < arr.length; i++) {
            if (isNaN(arr[i + 1])) { break }
            pair = arr[i] + arr[i + 1]
            arr1.push(pair)
        }
        arr = arr1
        arr1 = []
    }
    console.log(arr[0])
}
condense([2, 10, 3])