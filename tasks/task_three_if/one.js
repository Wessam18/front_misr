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



// 1.Write an algorithm to calculate a person's BMI and check whether a person is underweight, overweight, or fit
// BMI is calculated using the weight divided by the height squared, where the weight in kg and height in m.
// People having BMI under 18.5 are underweight, from 18.5 to 25 are fit, and over 25 are overweight. Given Height and Weight.
document.getElementById('btn4').addEventListener("click", () => {
    var n1 = Number(document.getElementById("no5").value)
    var n2 = Number(document.getElementById("no6").value)
    var bmi = (n1 / (n2**2))

    if (bmi < 18.5) {
        document.getElementById('loop4').innerHTML='<h5>You Are underweight '+bmi+'</h5>'
    } else if (bmi > 18.5 && bmi < 25) {
        document.getElementById('loop4').innerHTML='<h5>Nice, You Are fit '+bmi+'</h5>'
    } else {
        document.getElementById('loop4').innerHTML='<h5>You Are overweight '+bmi+'</h5>'
    }
})


// 4. A discount is made on a purchase as follows: 
//* if purchase ≤ 1000 L.E., there is no discount 
//* if purchase > 1000 L.E., the discount is 5% 
//Given the cost of the purchase, write an algorithm to calculate and print the money paid taking into consideration the 10% sales taxes.
// The taxes are calculated on the amount after the discount.
document.getElementById('btn5').addEventListener("click", () => {
    var n1 = Number(document.getElementById("no7").value)

    if (n1 <= 1000) {
        var purchase = (n1 + ((10*n1) / 100));
        document.getElementById('loop5').innerHTML='<h5>after taxes you must pay '+purchase+'</h5>'
    } else if (n1 > 1000) {
        var dis = (((95*n1) / 100) + ((10*n1) / 100));
        document.getElementById('loop5').innerHTML='<h5>after taxes you must pay '+dis+'</h5>'
    }
})


// 5.For the first two years, a dog year is equal to 10.5 human years. After that, each dog year is equal to 4 human years.
// Write a Python program to calculate a dogâs age in dog years, given a dogâs age in human years. 
//Expected output should look like the following: 
//* Input a dog’s age in human years: 2 The dog’s age in dog years is 21 2 
//* Input a dog’s age in human years: 15 The dog’s age in dog years is 73 
//* Input a dog’s age in human years: -5 Age must be positive number.
/*document.getElementById('btn6').addEventListener("click", () => {
    var n1 = Number(document.getElementById("no8").value)

    if (n1 <= 0) {
        document.getElementById('loop6').innerHTML='<h5>age is must a +ve no '+n1+'</h5>'
    } else if (n1 >) {
        document.getElementById('loop6').innerHTML='<h5>after taxes you must pay '+n1+'</h5>'
    }
})*/


// 7. Write an algorithm that acts as a calculator for 2 numbers. Calculator should be able to add, subtract, multiply, and divide.
// Given Two Number and the sign of the arithmetic operation.
document.getElementById('btn7').addEventListener("click", () => {
    var n1 = Number(document.getElementById("no9").value)
    var n2 = Number(document.getElementById("no10").value)
    var add = (n1 + n2)
    document.getElementById('loop7').innerHTML='<h5>'+add+'</h5>'
})
document.getElementById('btn8').addEventListener("click", () => {
    var n1 = Number(document.getElementById("no9").value)
    var n2 = Number(document.getElementById("no10").value)
    var sub = (n1 - n2)
    document.getElementById('loop8').innerHTML='<h5>'+sub+'</h5>'
})
document.getElementById('btn9').addEventListener("click", () => {
    var n1 = Number(document.getElementById("no9").value)
    var n2 = Number(document.getElementById("no10").value)
    var mul = (n1 * n2)
    document.getElementById('loop9').innerHTML='<h5>'+mul+'</h5>'
    console.log(mul)
})
document.getElementById('btn10').addEventListener("click", () => {
    var n1 = Number(document.getElementById("no9").value)
    var n2 = Number(document.getElementById("no10").value)
    var div = (n1 / n2)
    document.getElementById('loop10').innerHTML='<h5>'+div+'</h5>'
})
