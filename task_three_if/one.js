// 1:Write an algorithm to input two numbers and print the bigger number.
document.getElementById('btn').addEventListener("click", function (){
    var n1 = Number(document.getElementById("no").value);
    var n2 = Number(document.getElementById("no1").value);
    if (n1 > n2) {
        document.getElementById('loop').innerHTML='<h5>'+n1+'</h5>'
    } else {
        document.getElementById('loop').innerHTML='<h5>'+n2+'</h5>'
    }
})

// 2.Write an algorithm to check whether a number is negative, positive or zero.
document.getElementById('btn1').addEventListener("click", function (){
    var n1 = Number(document.getElementById("no2").value);
    if (n1 === 0) {
        document.getElementById('loop1').innerHTML='<h5> it is a zero '+n1+'</h5>'
    } else if (n1 < 0) {
        document.getElementById('loop1').innerHTML='<h5> it is a negative '+n1+'</h5>'
    } else {
        document.getElementById('loop1').innerHTML='<h5> it is a positive '+n1+'</h5>'
    }
})

// 1.Write an algorithm to check whether a number is divisible by 5 and 11 or not.
document.getElementById('btn2').addEventListener("click", function (){
    var n1 = Number(document.getElementById("no3").value);
    if (n1 % 5 === 0 && n1 % 11 === 0) {
        document.getElementById('loop2').innerHTML='<h5>' +n1+' is divisible by 5 and 11</h5>'
    } else {
        document.getElementById('loop2').innerHTML='<h5>' +n1+' is not divisible by 5 and 11</h5>'
    }
})

// 2.Write an algorithm to check whether a number is even or odd
document.getElementById('btn3').addEventListener("click", function (){
    var n1 = Number(document.getElementById("no4").value);
    if (n1 % 2 === 0) {
        document.getElementById('loop3').innerHTML='<h5>' +n1+' is an even number</h5>'
    } else {
        document.getElementById('loop3').innerHTML='<h5>' +n1+' is an odd number</h5>'
    }
})


// 3.Write an algorithm to check whether a number is within range or not. Given two numbers that represent the range.
