function vowelSum(input){
    let text = input[0]
    let iVar = 0
    let n = 0
    sum = 0
    const vowels = {
    "a" : [1],
    "e" : [2],
    "i" : [3],
    "o" : [4],
    "u" : [5]
    } 
for (;n<text.length;n++){
    if (text[n] == "a" || text[n] == "e" || text[n] == "i" || text[n] == "o" || text[n] == "u") {
        sum = sum + Number(vowels.text[n])
    }
}
console.log(sum)
}
vowelSum(["bamboo"])