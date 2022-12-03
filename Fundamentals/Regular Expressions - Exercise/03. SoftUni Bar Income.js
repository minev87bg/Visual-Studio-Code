function solve(input) {
    let pattern = /(?<name>%[A-Z][a-z]+%)(.+)?(?<product><\w+>)(.+)?(?<count>\|\d+\|)([\D]+)?(?<price>(\d+\.)?\d+\$)/g
    let names = []; let products = []; let count = []; let price = []
    let sum = 0
    for (line of input) {
        if (line != "end of shift") {
            while ((validPurchase = pattern.exec(line)) !== null) {
                let name = validPurchase.groups["name"].replace("%", "").replace("%", "")
                let product = validPurchase.groups["product"].replace("<", "").replace(">", "")
                let count = Number(validPurchase.groups["count"].replace("|", "").replace("|", ""))
                let price = Number(validPurchase.groups["price"].replace("$", ""))
                sum += count * price
                console.log(`${name}: ${product} - ${(price * count).toFixed(2)}`)
            }
        }
    }
    console.log(`Total income: ${sum.toFixed(2)}`)
}
solve(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])