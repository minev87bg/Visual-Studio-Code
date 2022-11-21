function vacation(count, peopleType, day) {
    let discount = 1
    if (peopleType == "Students" && count >= 30) { discount = 0.85 }
    if (peopleType == "Business" && count >= 100) { count -= 10 }
    if (peopleType == "Regular" && count >= 10 && count <= 20) { discount = 0.95 }
    const priceTable = {
        "Students": [8.45, 9.80, 10.46],
        "Business": [10.90, 15.60, 16],
        "Regular": [15, 20, 22.50]
    }
    if (day == "Friday") arrayIndex = 0; if (day == "Saturday") arrayIndex = 1; if (day == "Sunday") arrayIndex = 2
    finalPrice = priceTable[peopleType][arrayIndex] * discount
    totalPrice = count * finalPrice
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(40,
    "Regular",
    "Saturday")