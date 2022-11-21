function solve(BrowserObject, commands) {
    let closedTabs = BrowserObject["Recently Closed"]
    function close(tab, x) {
        if (BrowserObject["Open Tabs"].includes(tab)) {
            BrowserObject["Open Tabs"].splice(BrowserObject["Open Tabs"].indexOf(tab), 1)
            BrowserObject["Browser Logs"].push(x)
            recentlyClosed(tab)
        }
    }
    function open(tab) { BrowserObject["Open Tabs"].push(tab) }
    function clear() {
        for (let key in BrowserObject) { closedTabs = []; if (key !== "Browser Name") { BrowserObject[key] = [] } }
    }
    function recentlyClosed(tab) { closedTabs.push(tab) }
    for (comm of commands) {
        let task = comm.split(" ")[0]
        let target = comm.split(" ")[1]
        if (task == "Close") { close(target, comm) }
        else { BrowserObject["Browser Logs"].push(comm) }
        if (task == "Open") { open(target) }
        if (task == "Clear") { clear() }
    }

    for (let [key, values] of Object.entries(BrowserObject)) {
        if (key !== 'Browser Name') { console.log(`${key}: ${values.join(', ')}`) }
        else { console.log(values) }
    }
}
solve({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter", "Close Dropbox"]
)