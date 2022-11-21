function cleverLilly(input) {
    let age = Number(input[0])
    let washingMachine = Number(input[1])
    let toyPrice = Number(input[2])
    let toyQty = 0
    let sum = 0
    let moneyGift = 0
    for (i = 1; i <= age; i++) {
        if (i % 2 == 1) { toyQty++ } else { moneyGift += 10; sum += moneyGift; sum -= 1 }
    }
    sum = sum + toyQty * toyPrice
    delta = (Math.abs(sum - washingMachine)).toFixed(2)
    if (sum >= washingMachine) { console.log(`Yes! ${delta}`) } else { console.log(`No! ${delta}`) }
}
cleverLilly([21,1570.98,3])