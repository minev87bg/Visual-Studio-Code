function solve(input) {
    let line = []
    let object = {}
    object['Hero'] = []
    object['level'] = []
    object['items'] = []
    for (let i = 0; i < input.length; i++) {
        line = input[i].split(" / ")
        object['Hero'].push(line[0])
        object['level'].push(line[1])
        object['items'].push(line[2])
    }
    lowestLevel = Math.min(...object.level)
    highestLevel = Math.max(...object.level)
    for (let i = lowestLevel; i <= highestLevel; i++) {
        index = object.level.map(Number).indexOf(i)
        if (object.level.map(Number).includes(i)) {
            console.log(`Hero: ${object.Hero[index]}\nlevel => ${object.level[index]}\nitems => ${object.items[index]}`)
        }
    }

}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])