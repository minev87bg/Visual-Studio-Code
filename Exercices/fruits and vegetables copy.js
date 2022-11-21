function fruitsAndVegetables (input){
const fruit = ["banana", "lemon","grapes","apple","kiwi","cherry"]
const vegetable = ["tomato","cucumber","pepper","carrot"]
if (fruit.includes(`${input[0]}`)) {console.log("fruit")} 
else if (vegetable.includes(`${input[0]}`)) {console.log("vegetable")} 
else {console.log("unknown")}
}
fruitsAndVegetables(["juice"])