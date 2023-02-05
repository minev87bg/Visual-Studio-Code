function solve(input) {
    let n = input.wheelsize
    let car = {
        model: input.model,
        engine: {
            power: 0,
            volume: 0,
        },
        carriage: {
            type: input.carriage,
            color: input.color,
        },
        wheels: [],
    };

    if (input.power <= 90) {
        input.power = 90;
        car.engine.power = 90;
        car.engine.volume = 1800;
    } else if (input.power > 90 && input.power <= 120) {
        car.engine.power = 120;
        input.power = 120;
        car.engine.volume = 2400;
    } else if (input.power > 120 && input.power <= 200) {
        car.engine.power = 200;
        input.power = 200;
        car.engine.volume = 3500;
    }
    if (n % 2 == 0) { n--; car.wheels = [n, n, n, n] }
    else { car.wheels = [n, n, n, n]; }
    console.table(car)
    return car;
}
solve(({
    model: 'VW Golf II',
    power: 110,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}))