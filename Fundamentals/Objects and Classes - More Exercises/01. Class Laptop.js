class Laptop {
    info = {}
    quality
    isOn = false
    get price() { return 800 - (this.info.age * 2) + (this.quality * 0.5) }
    constructor(info, quality) {
        this.info = info
        this.quality = quality
    }
    turnOn() { this.isOn = true; this.quality -= 1 }
    turnOff() { this.isOn = false; this.quality -= 1 }
    showInfo() { return JSON.stringify(this.info) }
}
let info = { producer: "Dell", age: 2, brand: "XPS" }
let laptop = new Laptop(info, 10)
console.log()
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)