function priceCalc(input) {
  let town = input[1]
  let choice = input[0]
  let qty = Number(input[2])
  const products = {
    "coffee": [0.5, 0.4, 0.45],
    "water": [0.8, 0.7, 0.7],
    "beer": [1.2, 1.15, 1.1],
    "sweets": [1.45, 1.3, 1.35],
    "peanuts": [1.6, 1.5, 1.55]
  }
  switch (town) {
    case "Sofia": { i = 0 } break
    case "Plovdiv": { i = 1 } break
    case "Varna": { i = 2 } break
  }
  price = products[choice][i]
  totalPrice = price * qty
  console.log(totalPrice)
}
priceCalc(["peanuts", "Varna", 4]);
