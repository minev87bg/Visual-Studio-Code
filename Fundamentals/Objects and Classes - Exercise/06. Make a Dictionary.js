function solve(input) {
    let dict = {}
    for (let i = 0; i < input.length; i++) {
        line = JSON.parse(input[i])
        dict = Object.assign(dict, line);
    }
    let terms = Object.keys(dict)
    terms.sort((a, b) => a.localeCompare(b))
    for (var el of terms) {
        console.log(`Term: ${el} => Definition: ${dict[el]}`)
    }
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
])