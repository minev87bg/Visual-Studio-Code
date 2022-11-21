function solve(stock, newStock) {
    let stockObj = {}
    stock.forEach((el, index) => {
        if (index % 2 == 0) { stockObj[el] = Number(stock[index + 1]) }
    })
    newStock.forEach((element, i) => {
        if (i % 2 == 0) {
            if (element in stockObj) { stockObj[element] += Number(newStock[i + 1]) }
            else { stockObj[element] = Number(newStock[i + 1]) }
        }
    })
    for (const key in stockObj) { console.log(`${key} -> ${stockObj[key]}`) }
}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])