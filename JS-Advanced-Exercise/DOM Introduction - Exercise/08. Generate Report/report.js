function generateReport() {
    let checkBoxInput = Array.from(document.querySelectorAll('input'));
    let row = Array.from(document.querySelectorAll('tbody tr'));

    let output = [];
    for (let i = 0; i < row.length; i++) {
        let obj = {}
        for (let j = 0; j < checkBoxInput.length; j++) {
            if (checkBoxInput[j].checked === true) {
                let prop = checkBoxInput[j].parentNode.textContent.trim().toLowerCase();
                obj[prop] = row[i].children[j].textContent.trim();
            }
        }
        if (Object.keys(obj).length > 0) {
            output.push(obj)
        }
    }
    document.querySelector('textarea').value = JSON.stringify(output, null, 2);
}