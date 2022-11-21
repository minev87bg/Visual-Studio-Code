function solve(input) {
    let products = {}
    let prodNames = []
    let letters = []
    let firstLetter
    for (let el of input) {
        productName = el.split(" : ")[0]
        productPrice = el.split(" : ")[1]
        products[`${productName}`] = productPrice
        prodNames.push(productName)
    }
    prodNames.sort((a, b) => { return a.localeCompare(b) })
    for (el of prodNames) {
        firstLetter = String(el)[0]
        if (!letters.includes(firstLetter)) { letters.push(firstLetter) }
    }
    for (n of letters) {
        console.log(n)
        prodNames.forEach((el, i) => { if (String(el)[0] === n) { console.log(` ${el}: ${products[el]}`) } })
    }
}
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)