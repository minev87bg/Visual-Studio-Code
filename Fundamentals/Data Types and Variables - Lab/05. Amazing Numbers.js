function amazing(num) {
    let numString = num.toString()
    let sum = 0
    let status
    for (let i = numString.length - 1; i >= 0; i--) { sum += Number(numString[i]) }
    if (sum.toString().includes(9)) { status = "True" } else status = "False"
    console.log(`${num} Amazing? ${status}`)
}
amazing(2456)