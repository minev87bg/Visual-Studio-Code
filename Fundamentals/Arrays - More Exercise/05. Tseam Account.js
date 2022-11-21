function tseam(arr) {
    let account = []
    account.push(arr[0])
    let accArray = account.join(' ').split(' ')
    i = 1
    while (arr[i] != "Play!") {
        if (arr[i].includes("Install") || arr[i].includes("Uninstall") || arr[i].includes("Update")) {
            let command = ""
            let game = []; game.push(arr[i])
            let gameArray = game.join(` `).split(` `)
            command = gameArray.splice(0, 1)
            if (command == "Install") { if (!accArray.includes(gameArray[0])) { accArray.push(gameArray[0]) } }
            if (command == "Uninstall") {
                if (accArray.includes(gameArray[0])) {
                    accArray.splice(accArray.indexOf(gameArray[0]), 1)
                }
            }
            if (command == "Update") {
                if (accArray.includes(gameArray[0])) {
                    accArray.push(accArray.splice(accArray.indexOf(gameArray[0]), 1))
                }
            }
        } else if (arr[i].includes("Expansion")) {
            let command = ""
            let game = []; game.push(arr[i])
            let gameArray = game.join(` `).split(` `)
            command = gameArray.splice(0, 1)
            let readyElement = []
            readyElement = gameArray.join().split(`-`)
            readyElement.splice(1, 1, readyElement.join(":"))
            if (command == "Expansion") {
                if (accArray.includes(readyElement[0])) {
                    accArray.splice(accArray.indexOf(readyElement[0]), 1, ...readyElement)
                }
            }
        }
        i++
    }
    console.log(accArray.join(" "))
}

tseam(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'])