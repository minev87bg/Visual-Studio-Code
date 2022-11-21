function tennisRanklist(input) {
    let count = input[0]
    let startPoints = Number(input[1])
    let sum = startPoints
    let w = 0
    for (let i = 2; i <= input.length; i++) {
        let outcome = input[i]
        switch (outcome) {
            case "W": { sum += 2000; w++ } break;
            case "F": { sum += 1200 } break;
            case "SF": { sum += 720 } break;
        }
    }
    console.log(`Final points: ${sum}`)
    console.log(`Average points: ${Math.floor((sum - startPoints) / count)}`)
    console.log(`${(w/count *100).toFixed(2)}%`)
}
tennisRanklist([5,1400,"F","SF","W","W","SF"])