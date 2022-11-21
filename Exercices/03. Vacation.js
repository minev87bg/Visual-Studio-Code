function vacation(input) {
    let vacMoney = Number(input[0])
    let budget = Number(input[1])
    let i = 2
    let day = 0
    let spendEvents = 0
    while (i <= input.length) {
        let event = input[i]
        let eventSum = Number(input[i + 1])
        if (spendEvents == 5) {
            console.log(`You can't save the money.`)
            console.log(day)
            break
        }
        if (budget >= vacMoney) { console.log(`You saved the money for ${day} days.`); break }
        if (event == "spend") {
            spendEvents++;
            budget -= eventSum;
            day++; i += 2;
            if (budget <= 0) { budget = 0 }
        }
        else if (event == "save") { spendEvents = 0; budget += eventSum; day++; i += 2; }
    }
}
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"])