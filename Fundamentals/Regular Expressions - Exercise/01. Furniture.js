function solve(input) {
    let pattern = /^[>]{2}(?<type>[A-ZA-z]+)[<]{2}(?<price>(\d+\.)?[\d]+)\!(?<qty>[\d]+)/g
    let command = input.shift()
    let furniture = []
    let totalSum = 0
    while (command !== "Purchase") {
        while ((validPurchase = pattern.exec(command)) !== null) {
            let type = validPurchase.groups["type"]
            let price = Number(validPurchase.groups["price"])
            let qty = Number(validPurchase.groups["qty"])
            furniture.push(type); totalSum += price * qty
        }
        command = input.shift()
    }
    console.log("Bought furniture:")
    if (furniture.length > 0) { console.log(furniture.join("\n")) }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`)
}
solve([
    '>Invalid<<!5',
    'Purchase']
)