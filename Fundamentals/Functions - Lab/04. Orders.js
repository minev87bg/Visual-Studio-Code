function solve(product, qty) {
    let prices = {
        "coffee": [1.5],
        "water": [1.00],
        "coke": [1.40],
        "snacks": [2.00]
    }
    console.log((qty * prices[product][0]).toFixed(2))

}
solve("water", 5)