function fruitShop(input) {
    let day = input[1]
    let fruit = input[0]
    let qty = Number(input[2])
    const workDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    const weekEnd = ["Saturday", "Sunday"]
    const choice = {
        "banana": [2.5, 2.7],
        "apple": [1.20, 1.25],
        "orange": [0.85, 0.90],
        "grapefruit": [1.45, 1.60],
        "kiwi": [2.70, 3],
        "pineapple": [5.50, 5.6],
        "grapes": [3.85, 4.20]
    }
    if (weekEnd.includes(day)) { i = 1 }
    if (workDays.includes(day)) { i = 0 }
    if (fruit in choice) {
        if (workDays.includes(day) || weekEnd.includes(day)) {
            let sum = choice[fruit][i] * qty
            console.log(sum.toFixed(2))
        } else { console.log("error") }
    }
    else { console.log("error") }
}
fruitShop(["orange", "Saturday", 2])