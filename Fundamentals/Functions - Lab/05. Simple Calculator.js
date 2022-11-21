function solve(num1, num2, command) {
    switch (command) {
        case "multiply": { console.log(num1 * num2) }; break;
        case "divide": { if (num2 != 0) { console.log(num1 / num2) } else { console.log(num2 / num1) } }; break;
        case "subtract": { console.log(num1 - num2) }; break;
        case "add": { console.log(num1 + num2) }; break;
    }
}
solve(50,
    13,
    "subtract")