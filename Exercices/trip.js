function trip (input){
    let budget = Number(input[0])
    let season = input[1]
    let destination
    let place
    if (budget<=100) {destination = "Bulgaria"} else
    if (budget<=1000) {destination = "Balkans"} else (destination = "Europe")
    if (season != "summer" || destination =="Europe") { place = "Hotel"; i=1} else {place = "Camp"; i=0}
    const discount ={
        "Bulgaria":[0.3,0.7],
        "Balkans":[0.4,0.8],
        "Europe":[0.9,0.9]
    }
let cost = budget * discount[destination][i]
console.log(`Somewhere in ${destination}`)
console.log(`${place} - ${cost.toFixed(2)}`)
}
trip([10000, "winter"])
