function solve(input) {
    let armies = []
    let resultObj = {}
    input.forEach(el => {
        if (el.includes("arrives")) {
            let line = el.split(" "); line.pop(); armies[line.join(" ")] = []
        }
        if (el.includes(":")) {
            [leader, army] = el.split(": ")
            army = army.split(", ")
            if (armies[leader]) { armies[leader].push(army) }
        }
        if (el.includes("defeated")) { let line = el.split(" "); line.pop(); delete armies[line.join(" ")] }
        if (el.includes("+")) {
            [army, count] = el.split(" + ")
            Object.keys(armies).forEach(el => {
                armies[el].forEach(el => {
                    if (el.includes(army)) {
                        let num = Number(el[1])
                        el[1] = Number(count) + num
                    }
                    else { let num = Number(el[1]); el[1] = num }
                })
            })
        }
    })
    Object.keys(armies).forEach(leader => {
        if (armies[leader].length == 0) { resultObj[leader] = 0 }
        else {
            armies[leader].forEach(el => { resultObj[leader] = 0 })
            armies[leader].forEach(el => { resultObj[leader] += Number(el[1]); el.sort((a, b) => b - a) })
        }
    })
    let sortedTotalCount = Object.values(resultObj).sort((a, b) => b - a)
    sortedTotalCount.forEach(el => {
        for (key in resultObj) {
            if (resultObj[key] == el) { console.log(`${key}: ${el}`) } else continue
            Object.values(armies[key]).sort((a, b) => b[1] - a[1]).forEach(el => {
                console.log(`>>> ${el.join(" - ")}`)
            })
        }
    })
}
solve(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', "Ico arrives", "Ico: BMW, 0", 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])