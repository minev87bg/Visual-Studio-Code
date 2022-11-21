function solve(input) {
    let dayly = Number(input[0])
    let workers = Number(input[1])
    let otherFactory = Number(input[2])
    let biscuitsPerMonth = 0
    for (let i = 1; i <= 30; i++) {
        if (i % 3 == 0) { biscuitsPerMonth += Math.floor(dayly * workers * 0.75) }
        else { biscuitsPerMonth += dayly * workers }
    }
    let percent = (Math.abs(biscuitsPerMonth - otherFactory) / otherFactory * 100).toFixed(2)
    let status = ""
    if (biscuitsPerMonth < otherFactory) { status = "less" } else { status = "more" }
    console.log(`You have produced ${biscuitsPerMonth} biscuits for the past month.`)
    console.log(`You produce ${percent} percent ${status} biscuits.`)
}
solve([78, 8, 16000])