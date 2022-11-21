function cinemaTickets(input) {
    i = 0
    let seatsTaken = 0
    let totalTickets = 0
    let studTotal = 0
    let standTotal = 0
    let kidTotal = 0
    while (input[i] != "Finish") {
        student = 0
        standard = 0
        kid = 0
        seatsTaken = 0
        let movie = input[i]; i++
        let maxSeats = Number(input[i]); i++
        while (input[i] != "End") {
            if (input[i] === "Finish") { break }
            switch (input[i]) {
                case "student": { student++; studTotal++ } break;
                case "standard": { standard++; standTotal++ } break;
                case "kid": { kid++; kidTotal++ } break;
            }
            seatsTaken = 0
            seatsTaken = student + standard + kid
            if (seatsTaken == maxSeats) { break } else i++
        }
        if (input[i] == "Finish") { break } else i++
        totalTickets += seatsTaken
        console.log(`${movie} - ${(seatsTaken / maxSeats * 100).toFixed(2)}% full.`)

    }
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${(studTotal / totalTickets * 100).toFixed(2)}% student tickets.`)
    console.log(`${(standTotal / totalTickets * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(kidTotal / totalTickets * 100).toFixed(2)}% kids tickets.`)
}
cinemaTickets(["Shutter Island", "9", "standard", "standard", "standard", "student", "student", "student", "kid", "kid", "kid", "Rush", "9", "standard", "standard", "standard", "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Deadpool",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Finish"])
