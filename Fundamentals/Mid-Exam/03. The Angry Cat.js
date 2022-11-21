function solve(ratingArr, n, target) {
    let sumLeft = 0
    let sumRight = 0
    let cheapL = []
    let expensiveL = []
    let cheapR = []
    let expensiveR = []
    for (let i = 0; i < n; i++) {
        if (ratingArr[i] < ratingArr[n]) { cheapL.push(ratingArr[i]) } else { expensiveL.push(ratingArr[i]) }
    }
    for (let i = n + 1; i < ratingArr.length; i++) {
        if (ratingArr[i] < ratingArr[n]) { cheapR.push(ratingArr[i]) } else { expensiveR.push(ratingArr[i]) }
    }
    if (target == "cheap" && cheapL[0]) { sumLeft = cheapL.reduce((a, b) => { return a + b }) }
    if (target == "cheap" && cheapR[0]) { sumRight = cheapR.reduce((a, b) => { return a + b }) }
    if (target == "expensive" && expensiveL[0]) { sumLeft = expensiveL.reduce((a, b) => { return a + b }) }
    if (target == "expensive" && expensiveR[0]) { sumRight = expensiveR.reduce((a, b) => { return a + b }) }
    if (sumLeft >= sumRight) { console.log(`Left - ${sumLeft}`) }
    else if (sumLeft < sumRight) { console.log(`Right - ${sumRight}`) }
}
solve([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive")