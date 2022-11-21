function solve(input) {
    let partyIndex = input.indexOf("PARTY")
    let guestList = input.splice(0, partyIndex)
    let guests = input.splice(1, input.length)
    let vip = []; let regular = []
    guests.forEach(el => { if (guestList.includes(el)) { let i = guestList.indexOf(el); guestList.splice(i, 1) } })
    guestList.forEach(el => { if (!isNaN(el[0])) { vip.push(el) } else regular.push(el) })
    console.log(guestList.length)
    if (vip.length > 0) console.log(vip.join("\n"))
    if (regular.length > 0) console.log(regular.join("\n"))
}
solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])