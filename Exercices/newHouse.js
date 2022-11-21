function newHouse(input) {
    let type = input[0]
    let qty = Number(input[1])
    let budget = Number(input[2])
    switch (type) {
        case "Roses": { if (qty > 80) { sum = qty * 5 * 0.9 } else { sum = qty * 5 } } break
        case "Dahlias": { if (qty > 90) { sum = qty * 3.8 * 0.85 } else { sum = qty * 3.8 } } break
        case "Tulips": { if (qty > 80) { sum = qty * 2.8 * 0.85 } else { sum = qty * 2.8 } } break
        case "Narcissus": { if (qty < 120) { sum = qty * 3 * 1.15 } else { sum = qty * 3 } } break
        case "Gladiolus": { if (qty < 80) { sum = qty * 2.5 * 1.2 } else { sum = qty * 2.5 } } break
    }
    sumLeft = budget - sum
    if (sumLeft >= 0) {
        console.log(`Hey, you have a great garden with ${qty} ${type} and ${sumLeft.toFixed(2)} leva left.`)
    }
    else { console.log(`Not enough money, you need ${(Math.abs(sumLeft)).toFixed(2)} leva more.`) }
}
newHouse(["Tulips", 88, 260])