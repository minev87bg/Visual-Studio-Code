function math (input){
    let n1 = Number(input[0])
    let n2 = Number(input[1])
    let op = input[2]
    let status =""
    switch (op) {
        case "-":{total = n1 - n2}break
        case "+":{total = n1 + n2}break
        case "*":{total = n1*n2}break
        case "/":{total = n1/n2}break
        case "%":{total = n1%n2}break
    }
    if (op !="/" && op!="%") {if (total%2 == 0) {status = " - even"} else {status = " - odd"}}
    if (op=="/"){total = total.toFixed(2)}
    if (n2 == 0 && (op=="/" || op=="%")) {console.log(`Cannot divide ${n1} by zero`)} else
    console.log (`${n1} ${op} ${n2} = ${total}${status}`)
}
math([123,9,"%"])