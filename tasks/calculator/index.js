document.getElementById('btn').addEventListener("click", () => {
    var n1 = Number(document.getElementById("no1").value)
    var n2 = Number(document.getElementById("no2").value)
    var operation = document.getElementById("operation").value;
    var result;

    if (operation === 'add') {
        result = n1 + n2;
    } else if (operation === 'sub') {
        result = n1 - n2;
    } else if (operation === 'mul') {
        result = n1 * n2;
    } else if (operation === 'div') {
        if (n2 === 0) {
            result = 'Cannot divide by zero';
        } else {
            result = n1 / n2;
        }
    } else {
        result = 'Invalid operation';
    }
    
    document.getElementById('result').innerHTML='<h2>'+result+'</h2>'
})
