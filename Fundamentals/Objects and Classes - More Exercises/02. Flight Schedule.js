function solve(input) {
    let firstArr = input.shift();
    let secondArr = input.shift();
    let thirdArr = input.shift();
    let flights = {};
    for (const line of firstArr) {
        let [number, Destination] = line.split(' ');
        flights[number] = { Destination, Status: 'Ready to fly' }
    }
    for (const line of secondArr) {
        let [number, currentStatus] = line.split(' ');

        if (flights.hasOwnProperty(number)) {
            flights[number].Status = currentStatus;
        }
    }
    for (const line in flights) {
        if (flights[line].Status == thirdArr) {
            console.log(flights[line])
        }
    }
}