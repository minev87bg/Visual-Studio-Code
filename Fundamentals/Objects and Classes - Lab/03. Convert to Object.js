function solve(string) {
    obj = JSON.parse(string)
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`)
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')