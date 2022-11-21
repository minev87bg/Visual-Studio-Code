function outfit(input){
    let degrees = Number(input[0])
    let daytime = input[1]
    switch (daytime) {
        case "Morning":{
            if(degrees >=10 && degrees <=18){ console.log(`It's ${degrees} degrees, get your Sweatshirt and Sneakers.`)};
            if(degrees >18 && degrees <=24){ console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`)};
            if(degrees >=25){ console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`)}} break 
        case "Afternoon" : {
            if(degrees >=10 && degrees <=18){ console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`)};
            if(degrees >18 && degrees <=24){ console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`)};
            if(degrees >=25){ console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot.`)}} break 
        case "Evening":{
            if(degrees >=10 && degrees <=18){ console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`)};
            if(degrees >18 && degrees <=24){ console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`)};
            if(degrees >=25){ console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`)}} break 
    }
}
outfit(["22","Afternoon"])
