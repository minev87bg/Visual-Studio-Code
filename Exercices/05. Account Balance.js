function accBalance(input) {
    let event
    let i = 0
    let sum = 0
    while (i <= input.length) {
        event = input[i]
        if (Number(event) >= 0) { console.log(`Increase: ${Number(event).toFixed(2)}`); sum += Number(event); i++ }
        else if (event < 0 && event != "NoMoreMoney") {
            console.log("Invalid operation!");
            console.log(`Total: ${sum.toFixed(2)}`); break
        }
        else if (event == "NoMoreMoney") { console.log(`Total: ${sum.toFixed(2)}`); break }
    }

}
//accBalance(["5.51", "69.42", "100", "NoMoreMoney"])
accBalance(["120", "45.55", "-150"])