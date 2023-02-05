function solve(steps, footprint, speed) {
    if (speed != 0) {
        let meters = steps * footprint
        let metersPerSec = speed * 1000 / 3600
        let seconds = meters / metersPerSec
        let minutes = Math.floor(seconds % 3600 / 60) + Math.floor(meters / 500)
        let hours = Math.floor(seconds / 3600)
        let secs = Math.round(seconds % 3600 % 60)
        if (hours < 10) { hours = `0${hours}` }
        if (minutes < 10) { minutes = `0${minutes}` }
        if (secs < 10) { secs = `0${secs}` }
        console.log(`${hours}:${minutes}:${secs}`)
    }
    else (console.log("00:00:00"))
}
solve(1, 1, 10)