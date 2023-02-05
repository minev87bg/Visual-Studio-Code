function solve(fruit, weight, count) {
    let money = (weight / 1000 * count).toFixed(2)
    console.log(`I need $${money} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`)
}
solve('apple', 1563, 2.35)