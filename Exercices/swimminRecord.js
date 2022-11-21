function swimRec (input){
    let record = Number(input[0])
    let length = Number(input[1])
    let sPerM = Number(input[2])
    if (record>0 && record<=100000 && length>0 && length<=100000 && sPerM>0 && sPerM<=1000){
        let time = length * sPerM
        let addTime = Math.floor(length/15)*12.5
        let totalTime = time+addTime
        if (record <= totalTime) {
          console.log(`No, he failed! He was ${(Math.abs(totalTime - record)).toFixed(2)} seconds slower.`)            
        }
        else {
            console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)    
        }
    }
}
swimRec(["55555.67","3017","5.03"])