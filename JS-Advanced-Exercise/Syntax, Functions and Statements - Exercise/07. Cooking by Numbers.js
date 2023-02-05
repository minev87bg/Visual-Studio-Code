function solve(num, op1, op2, op3, op4, op5) {
    let operationsArray = [op1, op2, op3, op4, op5]

    for (operation of operationsArray) {
        switch (operation) {
            case "chop": { num /= 2 } break;
            case "dice": { num = Math.sqrt(num) } break;
            case "spice": { num += 1 } break;
            case "bake": { num *= 3 } break;
            case "fillet": { num *= 0.8 } break;
        }
        console.log(num)
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')