function solve(input) {
    let phonebook = {}
    let newObj = {}
    for (el of input) {
        let [name, number] = el.split(" ")
        newObj[name] = number
    }
    Object.assign(phonebook, newObj)
    for (key in phonebook) { console.log(`${key} -> ${phonebook[key]}`) }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])