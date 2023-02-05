function solve(input) {
    let n = input.wheelsize
    let engine = input.power
    let car = {
        model: input.model,
        engine: {},
        carriage: { type: input.carriage, color: input.color, },
        wheels: []
    }
    if (n % 2 == 0) { n--; car.wheels = [n, n, n, n] }
    else { car.wheels = [n, n, n, n] }

    if (engine <= 90) { car.engine = { power: 90, volume: 1800 } }
    else if (engine <= 120) { car.engine = { power: 120, volume: 2400 } }
    else { car.engine = { power: 200, volume: 3500 } }

    return (car)
}
solve({
    model: 'VW Golf II',
    power: 110,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})
solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})

