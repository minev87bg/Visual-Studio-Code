function sumDigits(num) {
    let numString = num.toString()
    let sum = 0
    for (let i = numString.length - 1; i >= 0; i--) { sum += Number(numString[i]) }
    console.log(sum)
}
sumDigits(245678)