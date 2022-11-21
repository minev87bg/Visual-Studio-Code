function hotelRoom(input){
    let month = input[0]
    let nights = Number(input[1])
    let studioDiscount = 1
    let appDiscount = 1
if (month == "May" || month == "October") {studio = 50;aprtmnt=65}
if (month == "June" || month =="September") {studio=75.20;aprtmnt=68.70}
if (month == "July" || month =="August") {studio=76;aprtmnt=77}
if (nights>7 && (month == "May" || month == "October")){studioDiscount = 0.95}
if (nights>14 && (month == "May" || month == "October")){studioDiscount = 0.7}
if (nights>14 && (month == "June" || month == "September")){studioDiscount = 0.8}
if (nights>14){appDiscount = 0.9}
console.log(`Apartment: ${(aprtmnt*appDiscount*nights).toFixed(2)} lv.`)
console.log(`Studio: ${(studio*nights*studioDiscount).toFixed(2)} lv.`)
}
hotelRoom(["August",20])