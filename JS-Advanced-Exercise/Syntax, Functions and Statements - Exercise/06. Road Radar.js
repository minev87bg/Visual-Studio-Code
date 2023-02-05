function solve(speed, zone) {
    let speedLimit = 0
    let faster = false
    let difference = 0
    let status
    switch (zone) {
        case "motorway": { speedLimit = 130 } break;
        case "interstate": { speedLimit = 90 } break;
        case "city": { speedLimit = 50 } break;
        case "residential": { speedLimit = 20 } break;
    }
    if (speed > speedLimit) {
        difference = speed - speedLimit; faster = true
    }
    else { faster = false }
    if (difference <= 20) { status = "speeding" }
    else if (difference <= 40) { status = "excessive speeding" }
    else { status = "reckless driving" }
    if (faster) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }
    else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`
        )
    }
}

solve(100, 'city')