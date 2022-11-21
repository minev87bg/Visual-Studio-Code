function solve(arr) {
    let town = {}
    arr.forEach((el, index) => {
        town.town = el.split(" | ")[0]
        town.latitude = (Number(el.split(" | ")[1])).toFixed(2)
        town.longitude = (Number(el.split(" | ")[2])).toFixed(2)
        console.log(town)
    })
}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)