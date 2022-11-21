function reverseAnArray(n, input) {
    let arr = []
    let output = ""
    for (let i = 1; i <= n; i++) {
        arr.push(input[i - 1])
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        output += `${arr[i]} `
    }
    console.log(output)
}
reverseAnArray(3, [10, 20, 30, 40, 50])