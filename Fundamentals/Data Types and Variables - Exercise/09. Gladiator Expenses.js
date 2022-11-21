function gladiator(lostQty, helmet, sword, shield, armor) {
    let lostHelmet = 0
    let lostSword = 0
    let lostShield = 0
    let lostArmor = 0
    let lostArmorPermission
    for (let i = 1; i <= lostQty; i++) {
        if (i % 2 == 0) { lostHelmet++ }
        if (i % 3 == 0) { lostSword++ }
        if (i % 2 == 0 && i % 3 == 0) { lostShield++; lostArmorPermission = true }
        if (lostArmorPermission && lostShield % 2 == 0) { lostArmor++; lostArmorPermission = false }
    }
    let totalCost = lostHelmet * helmet + lostSword * sword + lostShield * shield + lostArmor * armor
    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`)
}
gladiator(23,
    12.50,
    21.50,
    40,
    200)