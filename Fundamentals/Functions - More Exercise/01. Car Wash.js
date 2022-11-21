function solve(arr) {
    let isClean = 0
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i]
        switch (command) {
            case "soap": { isClean += 10 }; break
            case "vacuum cleaner": { isClean *= 1.25 }; break
            case "mud": { isClean *= 0.9 }; break
            case "water": { isClean *= 1.2 }; break
        }
    }
    console.log(`The car is ${isClean.toFixed(2)}% clean.`)
}
solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])