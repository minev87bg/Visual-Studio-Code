function solve(arr) {
    let x1 = arr[0]
    let y1 = arr[1]
    let x2 = arr[2]
    let y2 = arr[3]
    function check1() {
        let check1 = Math.sqrt(Math.pow(Math.abs(0 - x1), 2) + Math.pow(Math.abs(0 - y1), 2));
        return check1;
    }
    function check2() {
        let check2 = Math.sqrt(Math.pow(Math.abs(x2 - 0), 2) + Math.pow(Math.abs(y2 - 0), 2));
        return check2;
    }
    function check3() {
        let check3 = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
        return check3;
    }
    if (Number.isInteger(check1())) { console.log(`{${x1}, ${y1}} to {0, 0} is valid`) }
    else { console.log(`{${x1}, ${y1}} to {0, 0} is invalid`) }
    if (Number.isInteger(check2())) { console.log(`{${x2}, ${y2}} to {0, 0} is valid`) }
    else { console.log(`{${x2}, ${y2}} to {0, 0} is invalid`) }
    if (Number.isInteger(check3())) { console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`) }
    else { console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`) }
}
solve([2, 1, 1, 1])