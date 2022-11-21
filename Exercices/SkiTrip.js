function skiTrip(input){
    let days = Number(input[0])
    let type = input[1]
    let rating = input[2]
    let sum
    const math ={
    "room for one person": [1,1,1,18],
    "apartment": [0.7,0.65,0.5,25],
    "president apartment":[0.9,0.85,0.8,35]
    }
    if (days<10){i=0} else if(days<=15){i=1} else {i=2}
    switch (rating) {
        case "positive":{sum = (days-1)*math[type][3]*math[type][i]*1.25}break
        case "negative":{sum = (days-1)*math[type][3]*math[type][i]*0.9}break
    }
console.log(sum.toFixed(2))

}
skiTrip([14,"apartment","positive"])
skiTrip([30,"president apartment","negative"])