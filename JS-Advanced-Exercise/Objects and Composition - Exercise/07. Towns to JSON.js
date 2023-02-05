function townsToJSON(input) {

    let townsArr = [];
    for (let line of input.slice(1)) {
        let [empty, Town, Latitude, Longitude] = line.split(/\s*\|\s*/);
        let townObj = {
            Town: Town,
            Latitude: Number(Number(Latitude).toFixed(2)),
            Longitude: Number(Number(Longitude).toFixed(2))
        };
        townsArr.push(townObj);
    }
    console.log(JSON.stringify(townsArr));
}

townsToJSON(['| Town | Latitudeitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);