function time(input){
    let hour = Number(input[0])
    let minutes = Number(input[1])
    let totalTime = hour*60 + minutes + 15
    let newHour = 0
    let newMinutes = 0
    if (hour>=0 && hour<=23 & minutes>=00 && minutes<=59) {
        newHour = Math.floor(totalTime /60)
        newMinutes = totalTime % 60  
    }
    if (newMinutes <10) {
        newMinutes = `0${newMinutes}`
    }
    if (newHour>23) {
        newHour = newHour%24 
    }
    console.log(`${newHour}:${newMinutes}`)
}
time([12,49])