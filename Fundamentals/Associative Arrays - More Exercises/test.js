function solve(input) {
    courses = {}
    for (line of input) {
        if (!line.includes("email")) {
            [course, capacity] = line.split(": ")
            if (!courses.hasOwnProperty(course)) { courses[course] = [capacity, []] }
            else { courses[course][0] += Number(capacity) }
        }
        else {
            let [userInfo, email, course] = line.replace(" with email ", "&").replace(" joins ", "&").split("&")
            let [username, credits] = userInfo.replace("[", " ").replace("]", "").split(" ")
            if (courses.hasOwnProperty(course) && courses[course][0] > 0) {
                //if (Object.values(courses[course][1]).find(el => el.username == username)) { continue }
                courses[course][1].push({ username, email, credits })
                courses[course][0]--
            }
        }
    }
    Object.keys(courses).sort((a, b) => courses[b][1].length - courses[a][1].length).forEach(course => {
        console.log(`${course}: ${courses[course][0]} places left`)
        Object.values(courses[course][1])
            .sort((a, b) => b.credits - a.credits)
            .forEach(student => {
                console.log(`--- ${student.credits}: ${student.username}, ${student.email}`)
            })
    })
}
solve(['JavaBasics: 0',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JavaBasics',
    'JavaBasics: 0',
    'user700[29] with email user700@user.com joins JavaBasics'])