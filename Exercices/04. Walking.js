function walking(input) {
    let stepsPerTime = 0
    let lastSteps = 0
    let i = 0
    let deltaSteps = 0
    let totalSteps = 0
    while (i <= input.length) {
        deltaSteps = 10000 - totalSteps
        if (input[i] !== "Going home") {
            stepsPerTime = Number(input[i])
            totalSteps += stepsPerTime;
            deltaSteps = 10000 - totalSteps
            if (totalSteps >= 10000) {
                console.log(`Goal reached! Good job!\n${Math.abs(deltaSteps)} steps over the goal!`); break
            }
            else { i++ }
        }
        else {
            lastSteps = Number(input[i + 1])
            totalSteps += lastSteps
            deltaSteps = 10000 - totalSteps
            if (totalSteps >= 10000) {
                console.log(`Goal reached! Good job!\n${Math.abs(deltaSteps)} steps over the goal!`); break
            }
            else {
                console.log(`${Math.abs(deltaSteps)} more steps to reach goal.`); break
            }
        }
    }
}
walking(["1500", "300", "2500", "3000", "Going home", "200"])
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])
walking(["125", "250", "4000", "30", "2678", "4682"])

