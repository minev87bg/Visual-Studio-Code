function tradeCommisions(input) {
    let a = Number(input[1]);
    let town = input[0]
    let comission = {
        "Sofia": [0.05, 0.07, 0.08, 0.12],
        "Varna": [0.045, 0.075, 0.10, 0.13],
        "Plovdiv": [0.055, 0.08, 0.12, 0.145]
    }
    if (a >= 0 && a <= 500) { i = 0 }
    if (a > 500 && a <= 1000) { i = 1 }
    if (a > 1000 && a <= 10000) { i = 2 }
    if (a > 10000) { i = 3 }
    if (a >= 0 && town in comission) {
        sum = comission[town][i] * a
        console.log((sum.toFixed(2)))
    }
    else { console.log("error") }
}
tradeCommisions(["Sofia", 1500])