function solve(arr) {
    let person = {}
    arr.forEach((el, index) => {
        person.name = el; person.num = String(el).length;
        console.log(`Name: ${person.name} -- Personal Number: ${person.num}`)
    })
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])