function fisherMen(input){
    let budget = Number(input[0])
    let season = input[1]
    let qty = Number(input[2])
    let discount = 100
    if (qty<=6){discount-=10} else
    if (qty<=11){discount-=15} else {discount -= 25}
    switch (season){
        case "Spring": {sum = 3000*discount/100}break
        case "Summer": {sum = 4200*discount/100}break
        case "Autumn": {sum = 4200*discount/100}break
        case "Winter": {sum = 2600*discount/100}break
    }
    if (qty%2==0 && season !=="Autumn"){sum *=0.95}
    sumLeft = budget-sum
    if(budget>=sum){console.log(`Yes! You have ${sumLeft.toFixed(2)} leva left.`)}
    else {console.log(`Not enough money! You need ${Math.abs(sumLeft).toFixed(2)} leva.`)}
}

fisherMen([3000,"Summer",10])