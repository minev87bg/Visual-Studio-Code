function dayOfWeek(input) {
    let a =input[0]
switch (a) {
    case "Monday": 
    case "Tuesday": 
    case "Wednesday": 
    case "Thursday": 
    case "Friday": console.log("Working day"); break
    case "Saturday": 
    case "Sunday": console.log("Weekend"); break
    default:console.log("Error"); break
}
}  
dayOfWeek(["Monday"])