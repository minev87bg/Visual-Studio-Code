function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let restaurant = {}
      let input = JSON.parse(document.querySelector("#inputs textarea").value)
      input.forEach(el => {
         let [restName, workers] = el.split(" - ")
         workers = workers.split(", ")

         workers.forEach(person => {
            let [name, salary] = person.split(" ")

            if (!restaurant[restName]) {
               restaurant[restName] = {}
               restaurant[restName].sum = 0
               restaurant[restName].restName = restName
               restaurant[restName].salaries = []
               restaurant[restName].Workers = {}
               restaurant[restName].workers = []
            }
            restaurant[restName].Workers[name] = salary
            restaurant[restName].salaries.push(Number(salary))
            restaurant[restName].sum += Number(salary)
            restaurant[restName][name] = Number(salary)
            restaurant[restName].workers.push(workers)
         })

         let sortedWorkers = Object.fromEntries(Object.entries(restaurant[restName].Workers).sort((a, b) => b[1] - a[1]))
         restaurant[restName].sortedWorkers = sortedWorkers
         restaurant[restName].maxSalary = (Math.max(...restaurant[restName].salaries)).toFixed(2)
         restaurant[restName].average = (restaurant[restName].sum / restaurant[restName].workers.length).toFixed(2)
      })

      let sorted = Object.values(restaurant).sort((a, b) => Number(b.average) - Number(a.average))
      let bestRestaurant = sorted[0]
      let result = `Name: ${bestRestaurant.restName} Average Salary: ${bestRestaurant.average} Best Salary: ${bestRestaurant.maxSalary}`
      let result2 = ``
      document.querySelector("#outputs #bestRestaurant p").textContent = result

      Object.keys(bestRestaurant.sortedWorkers).forEach(person => {
         let name = person;
         let salary = bestRestaurant.sortedWorkers[person]
         result2 += `Name: ${name} With Salary: ${salary} `
      })
      document.querySelector("#outputs #workers p").textContent = result2
   }
}
