function solve(pies, start, finish) {
    if (pies.includes(start) && pies.includes(finish)) {
        newArr = pies.slice(pies.indexOf(start), pies.indexOf(finish) + 1)
    }
    return (newArr)
}
solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie')