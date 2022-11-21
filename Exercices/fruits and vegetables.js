function fruitsAndVegetables (input){
    let a =input[0]
    switch (a) {
        case "banana": 
        case "kiwi":
        case "apple":
        case "cherry":
        case "lemon": 
        case "grapes": console.log("fruit");break
        case "tomato":;
        case "cucumber":;
        case "pepper":;
        case "carrot": console.log("vegetable");break 
        default:console.log("unknown"); break
    }
    }  
fruitsAndVegetables(["carrot"])