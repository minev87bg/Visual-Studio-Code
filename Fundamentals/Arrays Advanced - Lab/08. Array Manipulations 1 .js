function solve(arr) {
    let numArr = [...arr[0].split(" ").map(Number)]
    let commandNumbers = []
    for (let i = 1; i < arr.length; i++) {
        let command = [...arr[i].split(" ")]
        commandNumbers = []
        for (a = 1; a < command.length; a++) {
            commandNumbers.push(Number(command[a]))
        }
        switch (command[0]) {
            case "Add": { numArr.push(...commandNumbers.map(Number)) } break;
            case "Remove": { numArr = numArr.filter(el => !commandNumbers.includes(el)) } break;
            case "RemoveAt": { commandNumbers.forEach(el => { numArr.splice(el, 1) }) } break;
            case "Insert": { numArr.splice(commandNumbers[1], 0, commandNumbers[0]) } break;
        }
    }
    console.log(numArr.join(" "))
}
solve(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'])