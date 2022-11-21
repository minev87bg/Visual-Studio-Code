function pyramid(base, increment) {
    let currentBase = base
    let stoneBase = 0
    let level = 1
    let stone = 0
    let marble = 0
    let lapis = 0
    let gold = 0
    let totalStone = 0
    let totalMarble = 0
    let totalLapis = 0
    let totalIncrement = 0
    while (currentBase > 0) {
        totalIncrement += increment
        if (currentBase - 2 <= 0) { gold = currentBase * currentBase * increment; break }
        stoneBase = currentBase - 2
        stone = stoneBase * stoneBase * increment
        stoneSqr = stoneBase * stoneBase
        if (level % 5 == 0) { lapis = (currentBase * currentBase - stoneSqr) * increment; totalLapis += lapis }
        else { marble = (currentBase * currentBase - stoneSqr) * increment; totalMarble += marble }
        totalStone += stone
        currentBase -= 2
        level++
    }
    console.log(`Stone required: ${Math.ceil(totalStone)}`)
    console.log(`Marble required: ${Math.ceil(totalMarble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(totalIncrement)}`)
}
pyramid(10, 0.1)