function solve(input) {
    let users = []
    let articles = []
    let comments = {}
    for (line of input) {
        if (line.split(" ")[0] == "user") { users.push(line.split(" ")[1]) }
        else if (line.split(" ")[0] == "article") {
            let x = line.split(" ")[1]
            if (!articles.includes(x)) { articles.push(x) }
        }
        else if (line.includes(" posts on ")) {
            const [user, article, title, comment] = line
                .replace(' posts on ', '&')
                .replace(': ', '&')
                .replace(', ', '&')
                .split('&');
            if (users.includes(user) && articles.includes(article)) {
                commentLine = `--- From user ${user}: ${title} - ${comment}`
                if (!comments[article]) { comments[article] = {} }
                if (!comments[article][user]) { comments[article][user] = []; comments[article][user].push(commentLine) }
                else { comments[article][user].push(commentLine) }
            }
        }
    }
    let sortedUsers = users.sort()
    Object.keys(comments).sort((a, b) => Object.keys(comments[b]).length - Object.keys(comments[a]).length).forEach(key => {
        console.log(`Comments on ${key}`)
        sortedUsers.forEach(user => {
            if (comments[key][user]) { console.log((comments[key][user]).join("\n")) }
        })
    })
}
solve(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: title.1, 111',
    'uSeR4 posts on Movies: title.2, 222',
    'someUser posts on Shopping: title.3, 333',
    'uSeR4 posts on Movies: title.4, 444',
    'someUser posts on Movies: title.5, 555'])