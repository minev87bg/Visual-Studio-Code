function catDiet(input) {
    let fatPercent = Number(input[0])
    let protPercent = Number(input[1])
    let carbPercent = Number(input[2])
    let totalFoodWeigth = Number(input[3])
    let waterPercent = Number(input[4])
    let foodWeigth = fatPercent / 100 * totalFoodWeigth / 9 + protPercent / 100 * totalFoodWeigth / 4 + carbPercent / 100 * totalFoodWeigth / 4
    let calPerGram = totalFoodWeigth / foodWeigth
    calPerGram = calPerGram - calPerGram * waterPercent/100
    console.log(calPerGram.toFixed(4))
}
catDiet(["40",
"40",
"20",
"3000",
"40"])