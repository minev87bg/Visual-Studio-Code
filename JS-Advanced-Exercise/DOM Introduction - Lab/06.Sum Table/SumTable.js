function sumTable() {
    let sum = 0
    let products = document.querySelectorAll('table tr td')
    for (let i = 0; i < products.length; i += 2) {
        let product = products[i]
        let price = Number(products[i + 1].textContent)
        sum += price
    }
    document.getElementById('sum').textContent = sum
}