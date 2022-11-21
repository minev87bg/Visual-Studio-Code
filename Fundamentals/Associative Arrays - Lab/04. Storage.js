function solve(input) {
    let storage = {}
    let newObj = {}
    for (el of input) {
        let [product, qty] = el.split(" ")
        if (!storage.hasOwnProperty(product)) { storage[product] = Number(qty) }
        else { storage[product] += Number(qty) }
    }
    for (key in storage) { console.log(`${key} -> ${storage[key]}`) }
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])