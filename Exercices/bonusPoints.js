function bonusP(input){
    let bonus = 0.0
    if (Number(input[0]<=100)) {
    bonus += 5
    }
    else if(Number(input[0])>100 && Number(input[0])<=1000) {
        bonus = bonus + Number(input[0]) * 0.2
    }
    if (Number(input[0])>1000){
        bonus =bonus + Number(input[0]) * 0.1
    }
    if (Number(input[0])%2 == 0) {
        bonus += 1
    }
    if (Number(input[0])%10 == 5) {
        bonus += 2
    }
console.log(bonus)
console.log(`${bonus + Number(input[0])}`)
}
bonusP([2703])