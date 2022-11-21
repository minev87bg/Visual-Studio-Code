function arrayRot(arr, n) {
    let i = 0
    let output = ""
    while (i != n) {
        arr.push(arr[0])
        arr.shift()
        i++
    }
    for (let i = 0; i < arr.length; i++) {
        output += `${arr[i]} `
    }
    console.log(output)
}
arrayRot([51, 47, 32, 61, 21], 2)