const avr = function (a, b, c) {
    return (a+b+c)/3
}
console.log(avr(4, 5, 6));  // Output: 5


var st = [
    {name:"menna", grade:"d"},
    {name:"menna", grade:"b"},
    {name:"menna", grade:"a"},
    {name:"menna", grade:"c"},
    {name:"menna", grade:"b"},
]

const grade = function(st) {
    var arr = []
    for (var i = 0; i < st.length; i++) {
        if (st[i].grade === "a") {
            arr.push(st[i])
        }
    }
    return arr
}

const sorted = function (st) {
    for (var i = 0; i < (arr.length - 1); i++) {
        var temp = i;
        for (var j = (i + 1); j < arr.length; j++) {
            if (arr[j] < arr[temp]) {
                temp = j;
            }
        }
        var min = arr[temp];
        arr[temp] = arr[i];
        arr[i] = min;
}}
