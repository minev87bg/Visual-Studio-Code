function printAndSum(a, z) {
    let sum = 0
    let output = ``
    for (; a <= z; a++) {
        output += `${a} `
        sum += a
    }
    console.log(output)
    console.log(`Sum: ${sum}`)
}
printAndSum(5, 10)