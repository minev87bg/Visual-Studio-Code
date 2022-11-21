function triangleOfNumbers(n) {
    let output = ``
    for (let a = 1; a <= n; a++) {
        for (let x = 1; x <= a; x++) {
            output += `${a} `
        }
        console.log(output)
        output = ``
    }
}
triangleOfNumbers(3)