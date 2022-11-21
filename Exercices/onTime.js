function onTime(input) {
    let hourOfExam = Number(input[0])
    let minOfExam = Number(input[1])
    let hourOfArrival = Number(input[2])
    let minOfArrival = Number(input[3])
    if (hourOfArrival == 0){hourOfArrival=24}
    let totalMinOfExam = hourOfExam * 60 + minOfExam
    let totalMinOfArrival = hourOfArrival * 60 + minOfArrival
    let delta = totalMinOfExam - totalMinOfArrival
    let deltaMin
    if (Math.abs(delta)>=60 && Math.abs(delta) % 60 < 10) { deltaMin = `0${Math.abs(delta) % 60}`}
    else { deltaMin = Math.abs(delta)%60 }
    let deltaFormated = `${Math.floor(Math.abs(delta) / 60)}:${deltaMin}`
    if (delta > 0 && delta <= 30 && delta!=0) {
        console.log("On time")
        console.log(`${deltaMin} minutes before the start`)
    }
    if (delta>30 && delta<60) {
        console.log("Early")
        console.log(`${deltaMin} minutes before the start`)
    }
    if (delta>=60){
        console.log("Early")
        console.log(`${deltaFormated} hours before the start`)
    }
    if(delta<0 && delta>-60){
        console.log("Late")
        console.log(`${deltaMin} minutes after the start`)
    }
    if(delta<=-60){
        console.log("Late")
        console.log(`${deltaFormated} hours after the start`)
    }
    if(delta == 0){console.log("On time")}

}
onTime([23,30,0,0])