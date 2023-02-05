function solve(inputObject) {
    let worker = Object.assign({}, inputObject)
    if (worker.dizziness) { worker.levelOfHydrated += worker.weight * worker.experience * 0.1 }
    return (worker)
}
solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
})