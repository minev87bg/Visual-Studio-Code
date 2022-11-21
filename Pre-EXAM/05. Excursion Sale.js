function excursionSale(input) {
    let maxSea = Number(input[0])
    let maxMount = Number(input[1])
    let profit = 0
    for (let i = 2; i <= input.length; i++) {
        let packet = input[i]
        if (packet == "sea" && maxSea == 0) { continue }
        if (packet == "mountain" && maxMount == 0) { continue }
        if (input[i] == "Stop") { break }
        switch (packet) {
            case "sea": { maxSea--; profit += 680 } break;
            case "mountain": { maxMount--; profit += 499 } break;
        }
    }
    if ((maxSea + maxMount) == 0) { console.log("Good job! Everything is sold."); console.log(`Profit: ${profit} leva.`) }
    else console.log(`Profit: ${profit} leva.`)
}
excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])