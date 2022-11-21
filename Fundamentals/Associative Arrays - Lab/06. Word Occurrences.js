function solve(input) {
    map = new Map()
    input.forEach(el => {
        if (map.hasOwnProperty(el)) { map[el] += 1 } else { map[el] = 1 }
    })
    for (let i = Math.max(...Object.values(map)); i > 0; i--) {
        Object.keys(map).forEach(el => {
            if (map[el] == i) { console.log(`${el} -> ${i} times`) }
        })
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])