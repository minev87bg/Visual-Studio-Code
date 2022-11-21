function chess(n) {
    let box = `black`
    lineStart = "black"
    console.log(`<div class="chessboard">`)
    for (let x = 1; x <= n; x++) {
        console.log("  <div>")
        if (lineStart == "black") { box = "black" } else box = "white"
        for (let y = 1; y <= n; y++) {
            console.log(`    <span class="${box}"></span>`)
            if (box == "black") { box = "white" } else box = "black"
        }
        if (lineStart == "black") { lineStart = "white" } else lineStart = "black"
        console.log("  </div>")
    }
    console.log(`</div>`)
}
chess(6)