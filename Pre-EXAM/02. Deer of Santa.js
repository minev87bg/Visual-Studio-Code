function deerSanta(input) {
    let days = Number(input[0])
    let totalFood = Number(input[1])
    let deer1consum = Number(input[2])
    let deer2consum = Number(input[3])
    let deer3consum = Number(input[4])
    let consumedFoodPerDay = deer1consum + deer2consum + deer3consum
    let totalConsumedFood = consumedFoodPerDay * days
    if (totalConsumedFood <= totalFood) { console.log(`${Math.floor(totalFood - totalConsumedFood)} kilos of food left.`) }
    else console.log(`${Math.ceil(totalConsumedFood - totalFood)} more kilos of food are needed.`)
}
deerSanta(["5",
"10",
"2.1",
"0.8",
"11"])