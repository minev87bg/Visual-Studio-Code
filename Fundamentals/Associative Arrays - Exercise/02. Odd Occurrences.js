function solve(input) {
    let words = input.split(" ").map(el => el.toLowerCase())
    let map = new Map()
    words.forEach(el => {
        if (map.has(el)) { map.set(el, map.get(el) + 1) } else map.set(el, 1)
    })
    let result = []
    for ([key, value] of map.entries()) {
        if (!(value % 2) == 0) { result.push(key) }
    }
    console.log(result.join(" "))
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')