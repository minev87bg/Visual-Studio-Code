function spice(yield) {
    let maxYield = yield
    let days = 0
    let extracted = 0
    let consumed = 0
    while (yield > 0) {
        if (yield < 100) { extracted -= 26; break }
        extracted += yield
        extracted -= 26
        yield -= 10
        days++
    }
    console.log(days)
    if (extracted >= 0) { console.log(extracted) } else console.log("0")
}
spice(10)