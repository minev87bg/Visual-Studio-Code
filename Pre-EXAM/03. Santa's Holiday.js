function santaHolyday(input) {
    let days = Number(input[0])
    let type = input[1]
    let rating = input[2]
    let sum
    const room = {
        "room for one person": [1, 1, 1, 18],
        "apartment": [0.7, 0.65, 0.5, 25],
        "president apartment": [0.9, 0.85, 0.8, 35]
    }
    if (days < 10) { priceIndex = 0 }
    else if (days <= 15) { priceIndex = 1 }
    else { priceIndex = 2 }
    switch (rating) {
        case "positive": { sum = (days - 1) * room[type][3] * room[type][priceIndex] * 1.25 } break
        case "negative": { sum = (days - 1) * room[type][3] * room[type][priceIndex] * 0.9 } break
    }
    console.log(sum.toFixed(2))

}
santaHolyday(["12",
    "room for one person",
    "positive"])
