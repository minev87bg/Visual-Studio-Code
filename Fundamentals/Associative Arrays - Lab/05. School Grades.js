function solve(input) {
    let students = {}
    for (el of input) {
        let grades = el.split(" ")
        let name = grades.shift()
        grades = grades.map(Number)
        if (!students.hasOwnProperty(name)) { students[name] = grades }
        else { students[name].push(...grades) }
    }
    let sortedKeys = Object.keys(students).sort()
    sortedKeys.forEach(el => {
        console.log(`${el}: ${((students[el].reduce((a, b) => { return a + b })) / students[el].length).toFixed(2)}`)
    })
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])