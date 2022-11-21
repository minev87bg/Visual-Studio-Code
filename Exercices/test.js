function shopping(input){
    
    let budget = Number(input[0])
    let n = Number(input[1])
    let m = Number(input[2])
    let p = Number(input[3])

    let totalSumN = n * 250
    let totalSumM = m * (totalSumN*0.35)
    let totalSumP = p * (totalSumN*0.10)

    let total = totalSumN+totalSumM+totalSumP
    if (n>m) {
        total*=0.85
    }

    if (total<budget) {
        console.log(`You have ${(budget-total).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(total-budget).toFixed(2)} leva more!`)
    }


}
shopping(["920.45","3","1","1"])