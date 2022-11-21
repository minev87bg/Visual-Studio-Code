function solve(arr) {
    let cats = { name: "1", age: "1" }
    for (let i = 0; i < arr.length; i++) {
        let [name, age] = [arr[i].split(" ")[0], arr[i].split(" ")[1]]
        cats.name = name
        cats.age = age
        console.log(`${cats.name}, age ${cats.age} says Meow`)
    }
}
solve(['Mellow 2', 'Tom 5'])