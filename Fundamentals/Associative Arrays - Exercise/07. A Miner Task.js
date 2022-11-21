function solve(input) {
    let map = new Object()
    for (let i = 0; i < input.length; i += 2) { map[input[i]] = [] }
    for (let i = 0; i < input.length; i += 2) { map[input[i]].push(input[i + 1]) }
    for (key in map) { console.log(`${key} -> ${map[key].map(Number).reduce((a, b) => a + b)}`) }
}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])