function solve(arr) {
    let heroes = []
    arr.forEach(hero => {
        let [name, lvl, items] = hero.split(" / ")
        if (items) { items = items.split(", ") } else items = []
        heroes.push({ name: name, level: Number(lvl), items: items })
    })
    console.log(JSON.stringify(heroes))
}
solve(['Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])