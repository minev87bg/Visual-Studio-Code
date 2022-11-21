function login(input) {
    let user = input[0]
    function password() {
        let strOutput = ``
        for (let x = user.length - 1; x >= 0; x--) {
            strOutput += user[x]
        }
        return strOutput
    }
    let correct = false
    for (let i = 1; i <= 4; i++) {
        if (input[i] == password()) correct = true
        if (correct) { console.log(`User ${user} logged in.`); break }
        else if (i != 4) console.log(`Incorrect password. Try again.`)
    }
    if (!correct) { console.log(`User ${user} blocked!`) }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])