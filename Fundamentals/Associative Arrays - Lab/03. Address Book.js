function solve(input) {
    let addressBook = {}
    input.forEach(el => {
        let [name, place] = el.split(":")
        addressBook[name] = place
    })
    let sortedKeys = Object.keys(addressBook).sort()
    sortedKeys.forEach(key => {
        console.log(`${key} -> ${addressBook[key]}`)
    })
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])