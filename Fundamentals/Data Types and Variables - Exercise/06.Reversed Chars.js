function reversedChars(a, b, c) {
    let arr1 = [a, b, c]
    let output = ``
    for (let i = arr1.length - 1; i >= 0; i--) {
        output += `${arr1[i]} `
    }
    console.log(output)
}
reversedChars('A',
    'B',
    'C')