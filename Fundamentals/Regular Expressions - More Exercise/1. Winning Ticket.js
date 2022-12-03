function solve(input) {
    let tickets = input.split(/[,  ]+/g)
    let pattern = /(\@{6,}|\${6,}|\^{6,}|\#{6,})/g
    for (el of tickets) {
        if (el.length == 20) {
            let jackpotFlag = false
            let value = 0; let sign = ""
            let half1 = el.substr(0, el.length / 2)
            let half2 = el.substr(el.length / 2,)
            if (half1.match(pattern) && half2.match(pattern)) {
                half1 = half1.match(pattern).join("")
                half2 = half2.match(pattern).join("")
            }
            else { console.log(`ticket "${el}" - no match`); continue }
            function jackpot() { if (jackpotFlag) { return " Jackpot!" } else return "" }
            if (half2.includes(half1) || half1.includes(half2)) {
                let winningHalf = ""
                if (half1.length < half2.length) { winningHalf = half1 } else { winningHalf = half2 }
                sign = winningHalf[0]
                value = winningHalf.length
                if (value == 10) { jackpotFlag = true }
                console.log(`ticket "${el}" - ${value}${sign}${jackpot()}`)
            }
            else console.log(`ticket "${el}" - no match`)
        }
        else console.log(`invalid ticket`)
    }
}
solve("$$$$$$$$$$$$$$$$$$$$, aabb  , @@@@@@4456@@@@@@@@@@,    ,validticketnomatch:(")