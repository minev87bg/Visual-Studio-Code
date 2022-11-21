function figure(input){
var a
var b
var area
if (input[0] == "square") {
    a = Number(input[1])
    area = a * a
}
if (input[0] == "rectangle") {
    a = Number(input[1])
    b = Number(input[2])
    area = a*b
}
if (input[0] == "circle") {
    a = Number(input[1])
    area = a*a*Math.PI
}
if (input[0] == "triangle"){
    a = Number(input[1])
    b = Number(input[2])
    area = a*b/2
}
console.log(area.toFixed(2))
}


figure(["circle",4])