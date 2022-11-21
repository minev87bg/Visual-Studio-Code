function rakia(input) {
    let days = Number(input[0])
    let litersPerDay = 0
    let Degrees = 0
    let totalLiters = 0
    let totalDegrees = 0
    for (let i = 1; i <= input.length; i++) {
        if (days == 0) { break }
        days--
        litersPerDay = Number(input[i]); i++
        Degrees = Number(input[i])
        totalLiters += litersPerDay
        totalDegrees += Degrees * litersPerDay
        avgDegrees = totalDegrees / totalLiters
    }
    console.log(`Liter: ${totalLiters.toFixed(2)}`)
    console.log(`Degrees: ${avgDegrees.toFixed(2)}`)
    if (avgDegrees < 38) { console.log("Not good, you should baking!") }
    else if (avgDegrees <= 42) { console.log("Super!") }
    else console.log("Dilution with distilled water!")
}
rakia(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"])