function oscars(input) {
    let actor = input[0]
    let startPoints = Number(input[1])
    let juryQty = Number(input[2])
    sum = startPoints
    for (let i = 3, b = 4; i < input.length || b <= input.length; i += 2, b += 2) {
        let name = input[i]
        sum += ((Number(name.length) * Number((input[b])) / 2))
        if (sum >= 1250.5) { console.log(`Congratulations, ${actor} got a nominee for leading role with ${sum.toFixed(1)}!`); break }
    }
    if (sum < 1250.5) {console.log(`Sorry, ${actor} you need ${(1250.5 - sum).toFixed(1)} more!`)}
}
oscars(["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"])
//