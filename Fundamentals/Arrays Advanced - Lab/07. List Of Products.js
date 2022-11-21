function solve(arr) {
    arr.sort().forEach(el => console.log(`${arr.indexOf(el) + 1}.${el}`))
}
solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])