function animal(input) {
    let a = input[0]
    switch (a) {
        case "crocodile":
        case "tortoise":
        case "snake": console.log("reptile"); break
        case "dog": console.log("mammal"); break
        default: console.log("unknown"); break
    }
}
animal(["cat"])