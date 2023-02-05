function solve(arr) {
    let towns = {}
    for (el of arr) {
        let [name, population] = el.split(" <-> ")
        if (!Object.keys(towns).includes(name)) { towns[name] = Number(population) }
        else { towns[name] += Number(population) }
    }
    Object.keys(towns).forEach(el => {
        console.log(`${el} : ${towns[el]}`)
    })
}
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])