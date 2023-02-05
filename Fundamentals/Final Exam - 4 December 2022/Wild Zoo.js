function wildZoo(input) {
    let zoo = {};
    for (line of input) {
        if (line != "EndDay") {
            let [command, args] = line.split(' ')
            let [name, food, area] = args.split('-'); food = Number(food)
            if (command === 'Add:') {
                if (!zoo[area]) { zoo[area] = [] }
                if (!zoo[area][name]) { zoo[area][name] = { food: food } }
                else { zoo[area][name] = { food: food + zoo[area][name].food } }
            }
            else if (command === 'Feed:') {
                Object.keys(zoo).forEach(area => {
                    if (zoo[area].hasOwnProperty(name)) {
                        zoo[area][name].food -= food
                        if (zoo[area][name].food <= 0) {
                            console.log(`${name} was successfully fed`)
                            delete zoo[area][name]
                            if (Object.keys(zoo[area]).length <= 0) { delete zoo[area] }
                        }
                    }
                })
            }
        }
    }
    console.log('Animals:');
    for ([area, animal] of Object.entries(zoo)) {
        for ([entry, food] of Object.entries(animal)) {
            console.log(` ${entry} -> ${food.food}`)
        }
    }
    console.log(`Areas with hungry animals:`)
    for (area of Object.keys(zoo)) {
        console.log(`${area}: ${Object.keys(zoo[area]).length}`)
    }
}
wildZoo
    // (["Add: Adam-4500-ByTheCreek",
    //     "Add: Maya-7600-WaterfallArea",
    //     "Add: Maya-1230-WaterfallArea",
    //     "Feed: Jamie-2000",
    //     "EndDay"])
    // (["Add: Jamie-600-WaterfallArea",
    //     "Add: Maya-6570-WaterfallArea",
    //     "Add: Adam-4500-ByTheCreek",
    //     "Add: Bobbie-6570-WaterfallArea",
    //     "Feed: Jamie-2000",
    //     "Feed: Adam-2000",
    //     "Feed: Adam-2500",
    //     "EndDay"])
    (["Add: Bonie-3490-RiverArea",
        "Add: Sam-5430-DeepWoodsArea",
        "Add: Bonie-200-RiverArea",
        "Add: Maya-4560-ByTheCreek",
        "Feed: Maya-2390",
        "Feed: Bonie-3500",
        "Feed: Johny-3400",
        "Feed: Sam-5500",
        "EndDay"])