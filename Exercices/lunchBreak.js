function lunchBreak (input){
    let movie = (input[0])
    let episode = Number(input[1])
    let timeOff = Number(input[2])
    let eat = timeOff/8
    let rest = timeOff/4
    let timeLeft = timeOff-eat-rest
    if (timeLeft>=episode) {
    console.log(`You have enough time to watch ${movie} and left with ${Math.ceil(timeLeft-episode)} minutes free time.`)
    }
    if (timeLeft<episode) {
    console.log(`You don't have enough time to watch ${movie}, you need ${Math.ceil(episode-timeLeft)} more minutes.`)
    }
}
lunchBreak(["Teen Wolf",48,60])