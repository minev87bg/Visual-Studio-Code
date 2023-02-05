function solve(name, population, treasury) {
    let city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function collectTaxes() { return Math.floor(this.treasury += this.population * this.taxRate) },
        applyGrowth: function applyGrowth(percent) { return Math.floor(this.population += this.population * percent / 100) },
        applyRecession: function applyRecession(percent) { return Math.floor(this.treasury -= this.treasury * percent / 100) }
    }
    return city
}


solve('Tortuga',
    7000,
    15000)