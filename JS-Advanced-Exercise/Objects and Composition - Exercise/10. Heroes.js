function solve() {

    let createHero = {
        mage: function mage(name) {
            return mage = {
                name: name,
                health: 100,
                mana: 100,
                cast: function cast(spell) { console.log(`${this.name} cast ${spell}`); this.mana-- }
            }
        },
        fighter: function fighter(name) {
            return fighter = {
                name: name,
                health: 100,
                stamina: 100,
                fight: function () { console.log(`${this.name} slashes on the foe!`); this.stamina-- }
            }
        }
    }
    return createHero
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
