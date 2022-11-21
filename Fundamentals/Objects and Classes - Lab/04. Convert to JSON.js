function solve(first, last, hairColor) {
    let person = { name: first, lastName: last, hairColor: hairColor }
    console.log(JSON.stringify(person))
}
solve('George', 'Jones', 'Brown')