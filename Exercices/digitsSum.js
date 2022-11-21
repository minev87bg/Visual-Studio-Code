function digitsSum(input) {
    let digits = input[0]
    let n = 0
    sum = 0
    for (; n < digits.length; n++) {
            sum += Number(digits[n])
    }
    console.log(`The sum of the digits is:${sum}`)
}
digitsSum(["12346"])