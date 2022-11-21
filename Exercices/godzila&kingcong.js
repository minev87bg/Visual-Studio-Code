function godKong (input) {
    let budget = Number(input[0])
    let decore = budget*0.1
    let people = Number(input[1])
    let clothes = Number(input[2])
    if(budget>=1 && budget<=1000000 && people>=1 && people<=500 && clothes>=1 && clothes<=1000){
    if (people>=150) {
        clothes = clothes*0.9
    }
    let allCost = decore+people*clothes
    if (allCost<=budget){
        var final = (budget-allCost).toFixed(2)
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${final} leva left.`)
    } 
    else {
        var final = (allCost-budget).toFixed(2)
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${final} leva more.`)
    }
}
}
godKong([9587.88,222,55.68])