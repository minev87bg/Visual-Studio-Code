function solve(input) {
    let parking = new Map()
    input.forEach(el => {
        let [direction, carNumber] = el.split(", ")
        if (direction == "IN") { parking.set(carNumber) }
        else if (direction == "OUT") { parking.delete(carNumber) }
    })
    let result = [...parking.keys()].sort((a, b) => a.localeCompare(b))
    console.log(result.join("\n"))
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])