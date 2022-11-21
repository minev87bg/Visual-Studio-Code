function vacation([vacCost, qtyPuzzle, qtyDoll, qtyBear, qtyMinion, qtyTrucks]) {
    const toys = {
        'Puzzles': Number(qtyPuzzle) *  2.6,
        'Dolls': Number(qtyDoll) * 3,
        'Bears': Number(qtyBear) * 4.1,
        'Minions': Number(qtyMinion) * 8.2,
        'Trucks': Number(qtyTrucks) * 2
    }
    var qtyToys = Number(qtyPuzzle) + Number(qtyBear) + Number(qtyDoll) + Number(qtyMinion) + Number(qtyTrucks)
    var Income = toys['Puzzles'] + toys['Dolls'] + toys['Bears'] + toys['Minions'] + toys['Trucks']
    if (qtyToys >= 50) {
        Income = Income * 0.75
    }
    totalIncome = Income * 0.9
    if (totalIncome >= Number(vacCost)) {
        vacStatus = 'Yes!'
        money = (totalIncome - Number(vacCost)).toFixed(2)
        moneyStatus = 'left.'
    }
    else {
        vacStatus = 'Not enough money!'
        money = (Number(vacCost) - totalIncome).toFixed(2)
        moneyStatus = 'needed.'
    }
    console.log(`${vacStatus} ${money} lv ${moneyStatus}`)
    }
vacation([40.8,20,25,30,50,10])