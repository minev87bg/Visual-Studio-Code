function solve(input) {
    let coffeeArray = input.shift().split(" ")
    let n = input.shift()
    Array.prototype.swap = function (x, y) {
        let b = this[x];
        this[x] = this[y];
        this[y] = b;
        return this;
    }
    function modify([command, param1, param2]) {
        if (command == "Include") { coffeeArray.push(param1) }
        else if (command == "Prefer" && coffeeArray[param1] && coffeeArray[param2]) { coffeeArray.swap(param1, param2) }
        else if (command == "Reverse") { coffeeArray.reverse() }
        else {
            for (let i = 0; i < param2; i++) {
                if (param1 == "last") { coffeeArray.pop() }
                else if (param1 == "first") { coffeeArray.shift() }
            }
        }
    }
    for (let i = 0; i < n; i++) {
        let toDo = [...input[i].split(" ")]
        modify(toDo)
    }
    console.log(`Coffees:\n${coffeeArray.join(" ")}`)
}
solve((["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"]))