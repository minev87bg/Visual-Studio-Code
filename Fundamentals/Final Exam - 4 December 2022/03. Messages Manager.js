function solve(input) {
    let cap = input.shift()
    let record = []
    for (line of input) {
        if (line.includes("Add")) {
            let [command, name, sent, recieved] = line.split("=")
            if (!record[name]) { record[name] = { sent: sent, recieved: recieved, total: (Number(sent) + Number(recieved)) } }
            if (record[name].total >= cap) { delete record[name] }
        }
        if (line.includes("Message")) {
            let [command, sender, receipt] = line.split("=")
            if (record[sender] && record[receipt]) {
                if (record[sender].total < cap) {
                    record[sender].total++
                    record[receipt].total++
                    if (record[sender].total >= cap) { delete record[sender]; console.log(`${sender} reached the capacity!`) }
                    if (record[receipt].total >= cap) { delete record[receipt]; console.log(`${receipt} reached the capacity!`) }
                }
            }
        }
        if (line.includes("Empty")) {
            let [command, name] = line.split("=")
            if (record[name]) { delete record[name] }
            if (name == "All") { Object.keys(record).forEach(el => { delete record[el] }) }
        }
    }
    console.log(`Users count: ${Object.keys(record).length}`)
    Object.keys(record).forEach(name => { console.log(`${name} - ${record[name].total}`) })
}
solve(["20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0",
    "Empty=Berry",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Statistics"])