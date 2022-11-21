function inputType(value) {
    if (typeof value == "string") { console.log(`string\n${value}`) }
    else if (typeof value == "number") { console.log(`number\n${value}`) }
    else console.log(`${typeof value}\nParameter is not suitable for printing`)
}
inputType(null)