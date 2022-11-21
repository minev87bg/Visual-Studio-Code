function solve(input) {
    let map = {}
    input.forEach(el => {
        [garage, description] = el.split(" - ")
        if (!map.hasOwnProperty(garage)) { map[garage] = [] }
        map[garage].push(description)
    })
    for (key in map) {
        console.log(`Garage № ${key}`)
        map[key].forEach(el => { console.log(`--- ${el.replace(/: /g, ' - ')}`) })
    }
}
solve(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])