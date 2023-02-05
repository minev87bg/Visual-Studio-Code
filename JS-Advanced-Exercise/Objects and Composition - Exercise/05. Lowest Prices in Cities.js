function solve(input) {
    let cityArr = [];
    let cityProducts = [];

    let cityProdPrice = {};

    input.forEach(element => {
        let [city, product, priceStr] = element.split(" | ");

        cityArr.push(city, product, priceStr)
    });

    for (i = 0; cityArr.length > i; i += 3) {
        let city = cityArr[i];
        let product = cityArr[i + 1];
        let price = Number(cityArr[i + 2]);

        if ((cityProducts.length === 0) || arrCheck(city, product, price, cityProducts)) {

            cityProducts.push([city, product, price]);
        }
    }

    function arrCheck(a, b, c, d) {
        check = true;

        d.forEach((x, i) => {

            if (x.includes(a) && x.includes(b)) {
                d.splice(i, 1, ([a, b, c]))
                check = false;
            }
        });

        return check;
    };

    cityProducts.forEach(el => {
        let city = el[0];
        let product = el[1];
        let price = el[2];

        if (!cityProdPrice[product] || cityProdPrice[product].price > price) {
            cityProdPrice[product] = {
                city,
                price,
            }
        }
    });

    Object.keys(cityProdPrice).forEach(product => {

        console.log(`${product} -> ${cityProdPrice[product].price} (${cityProdPrice[product].city})`);
    });
}