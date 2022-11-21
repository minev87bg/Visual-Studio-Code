function solve(input) {
    let shelves = {}
    for (line of input) {
        if (line.includes("->")) {
            [id, genre] = line.split(" -> ")
            if (!shelves.hasOwnProperty(id)) { shelves[id] = { [genre]: [] } }
        }
        else {
            [title, author, genre] = line.replace(": ", " & ").replace(", ", " & ").split(" & ")
            book = `--> ${title}: ${author}`
            Object.keys(shelves).forEach(el => {
                if (shelves[el].hasOwnProperty(genre)) { shelves[el][genre].push(book) }
            })
        }
    }
    let sortedShelves = Object.keys(shelves).sort((a, b) => Object.entries(shelves[b])[0][1].length - Object.entries(shelves[a])[0][1].length)
    sortedShelves.forEach(id => {
        console.log(`${id} ${Object.keys(shelves[id])}: ${Object.values(shelves[id])[0].length}`)
        Object.values(shelves[id]).forEach(shelf => { console.log(shelf.join("\n")) })
    })
}


solve(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery', '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'])