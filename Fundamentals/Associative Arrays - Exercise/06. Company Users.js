function solve(input) {
    let map = {}
    input.forEach(el => { [company, employe] = el.split(" -> "); map[company] = [] })
    input.forEach(el => { [company, employe] = el.split(" -> "); if (!map[company].includes(employe)) map[company].push(employe) })
    let sorted = Object.keys(map).sort()
    sorted.forEach(el => {
        console.log(el)
        map[el].forEach(el => console.log(`-- ${el}`))
    })
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])