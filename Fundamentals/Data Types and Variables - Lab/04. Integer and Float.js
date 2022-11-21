function integerFloat(a, b, c) {
    let sum = a + b + c
    let status
    if (sum % 1 == 0) { status = "Integer" }
    else status = "Float"
    console.log(`${sum} - ${status}`)
}
integerFloat(100, 200, 303)