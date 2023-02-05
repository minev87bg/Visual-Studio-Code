function solve(arr) {
    arr.sort();

    let lastLetter;
    while (arr.length != 0) {
        if (arr[0][0] != lastLetter) {
            lastLetter = arr[0][0];
            console.log(lastLetter);
        }
        let [product, price] = arr.shift().split(' : ');
        console.log(`  ${product}: ${price}`);
    }
}