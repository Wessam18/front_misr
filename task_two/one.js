// 1.Write an algorithm to print all natural numbers from 1 to n. 
document.getElementById('btn').addEventListener("click", function (){
    var n1 = Number(document.getElementById("no").value);

    for(var count=1; count<=n1; count++){
            document.getElementById('loop').innerHTML+='<h5>'+count+'</h5>'
            console.log(count)
        }
})

// 2.Write an algorithm to print all natural numbers in reverse (from n to 1)
document.getElementById('btn1').addEventListener("click", function (){
    var n1 = Number(document.getElementById("no1").value);

    for(var count1=n1; count1>=1; count1--){
            document.getElementById('loop1').innerHTML+='<h5>'+count1+'</h5>'
            console.log(count1)
        }
})

// 3.Write an algorithm to print all the even numbers between 1 to 100.
document.getElementById('btn2').addEventListener("click", function (){
    var n1 = Number(document.getElementById("no2").value);
    var n2 = Number(document.getElementById("no3").value);

    for(var count=n1; count<=n2; count++){
        if(count%2==0){
            document.getElementById('loop2').innerHTML+='<h5>'+count+'</h5>'
            console.log(count)
        }
    }
})

// 4.Write an algorithm to print all odd numbers between 1 to 100.
document.getElementById('btn3').addEventListener("click", function (){
    var n1 = Number(document.getElementById("no4").value);
    var n2 = Number(document.getElementById("no5").value);

    for(var count=n1; count<=n2; count++){
        if(count%2!=0){
            document.getElementById('loop3').innerHTML+='<h5>'+count+'</h5>'
            console.log(count)
        }
    }
})

// 1.Write an algorithm to count the number of digits in a number.
document.getElementById('btn4').addEventListener("click", function (){
    var n1 = Number(document.getElementById("no6").value);
    var sum = 0;
    while (n1 > 0){
        n1 = Math.floor(n1 / 10);
        sum++
    }
    document.getElementById('loop4').innerHTML='<h5>'+sum+'</h5>'
    console.log(sum)

})

// 2.Write an algorithm to find the first and last digit of a number.
document.getElementById('btn5').addEventListener("click", function (){
    var n1 = Number(document.getElementById("no7").value);
    var last = n1 % 10; 
    var first = n1
    while (first >= 10){
        first = Math.floor(first / 10);
    }
    document.getElementById('loop5').innerHTML='<h5>First Digit' +first+ ', Last Digit:' +last+ '</h5>'
    console.log(first)
    console.log(last)
})

// 3.Write an algorithm that gets two positive integer numbers X and Y and calculates x*y Use only the addition and multiplication.
document.getElementById('btn6').addEventListener("click", function (){
    var res = 0; 
    var n1 = Number(document.getElementById("no8").value);
    var n2 = Number(document.getElementById("no9").value);

    for(var count=0; count<n2; count++){
        res += n1;
    }
    document.getElementById('loop6').innerHTML='<h5>'+res+'</h5>'

})

// 4.Write an algorithm to find the least number of terms that must be added to the following series
// 1^2 + 2^2 + 3^2 + 4^2 to give a sum ≥ 10000
document.getElementById('btn7').addEventListener("click", function (){
    var res = 1; 
    var sum = 0;
    var n1 = Number(document.getElementById("no10").value);

    while (sum < n1){
        sum += (res**2);
        res++;
    }
    res--;
    document.getElementById('loop7').innerHTML='<h5>'+res+'</h5>'
})

// 1.Write an algorithm that given two integer numbers, checks whether one number is a mirror of the other number. 
//Hint: Use the reverse algorithm that you implemented in the previous question. Fun fact: In the Computer Science world,
// we call the concatenation of both numbers a Palindrome.
document.getElementById('btn8').addEventListener("click", function (){
    var n1 = (document.getElementById("no11").value);
    var n2 = Number(document.getElementById("no12").value);
    var temp = n1.split('').reverse().join('');
    var temp2 = Number(temp);
    if (n2 === temp2){
        document.getElementById('loop8').innerHTML='<h5>yes,'+n2+ ' is the mirror of ' +n1+'</h5>'
    } else {
        document.getElementById('loop8').innerHTML='<h5>no,'+n2+ ' is not mirror of ' +n1+'</h5>'
    }
})

// 2. Write an algorithm that keeps on rolling two dice till both sides are equal.


// 3. This guessing game is a game where the program selects a random number between 1 and 10 and keeps asking you to guess,
// if you get it wrong you get a message informing you that you are a bad guesser, 
//and then it asks you to guess again, if you guess right your program congratulates your player and exits the game loop. 
document.getElementById('btn9').addEventListener("click", function () {
    const gussedNumber = Math.floor(Math.random() * 10) + 1;
    var n1 = parseInt(document.getElementById("no13").value, 10);

    while (n1 !== gussedNumber) {
        n1 = parseInt(prompt("No, you guessed wrong. Guess the right number (between 1 and 10):"), 10);
        document.getElementById('loop9').innerHTML = '<h5>you are a bad guesser you guessed' +n1+ '.</h5>';
    }

    if (n1 === gussedNumber) {
        document.getElementById('loop9').innerHTML = '<h5>Congratulations, you are a good player. the correct number is ' +gussedNumber+ '.</h5>';
    }
});
