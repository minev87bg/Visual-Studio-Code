function bitcoin(input) {
    let days = Number(input.length)
    let i = 1
    let buyDay = 0
    let bitcoinsQty = 0
    let totalIncome = 0
    while (i <= days) {
        let income = Number(input[i - 1]) * 67.51
        if (i % 3 == 0) { income *= 0.7 }
        totalIncome += income
        if (totalIncome >= 11949.16) { if (buyDay == 0) { buyDay = i } }
        i++
    }
    bitcoinsQty = (Math.floor(totalIncome / 11949.16)).toFixed(0)
    moneyLeft = totalIncome - bitcoinsQty * 11949.16
    console.log(`Bought bitcoins: ${bitcoinsQty}`)
    if (bitcoinsQty != 0) { console.log(`Day of the first purchased bitcoin: ${buyDay}`) }
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`)
}
bitcoin([100, 200, 300])