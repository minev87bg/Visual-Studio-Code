function numbersTo100 (input){
    let a=Number(input[0])
    let i = 0
    for (;i<=a;) {
        console.log(Math.pow(2,i));
        i+=2
    }
}
numbersTo100([4])