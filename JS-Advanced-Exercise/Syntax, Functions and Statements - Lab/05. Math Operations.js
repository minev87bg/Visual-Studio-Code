function solve(num1, num2, op) {
    switch (op) {
        case "+": { result = num1 + num2 } break;
        case "-": { result = num1 - num2 } break;
        case "*": { result = num1 * num2 } break;
        case "/": { if (num2 != 0) { result = num1 / num2 } else result = 0 } break;
        case "%": { if (num2 != 0) { result = num1 % num2 } else result = 0 } break;
        case "**": { result = num1 ** num2 } break;
    }
    console.log(result)
}
solve(5, 6, '+')