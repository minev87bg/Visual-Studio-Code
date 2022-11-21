function solve(input) {
    let text = [...input[0]]
    let obj = []
    text.forEach((el, i) => {
        if (obj[el]) { obj[el].push(i) }
        else obj[el] = [i]
    })
    Object.keys(obj).forEach(el => { console.log(`${el}:${obj[el].join("/")}`) })

}
solve(["abababa"])