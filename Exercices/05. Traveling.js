function traveling(input) {
    i = 0
    let event = input[i]
    i++
    while (event !== "End") {
        dest = event
        let budget = Number(input[i])
        i++
        let sum = 0
        while (sum < budget) {
            let savedMoney = Number(input[i])
            sum += savedMoney
            i++
        }
        console.log(`Going to ${dest}!`)
        event = input[i]
        i++
    }
}
traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])
