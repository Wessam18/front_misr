// 1.Write an algorithm to input two numbers and find their sum.
document.getElementById('btn').addEventListener("click", () => {
    var n1 = Number(document.getElementById("no").value)
    var n2 = Number(document.getElementById("no1").value)
    var sum = n1+n2
    document.getElementById('sum').innerHTML='<h5>'+sum+'</h5>'
})

// Write an algorithm to input three numbers and find their average.
document.getElementById('btn2').addEventListener("click", () => {
    var n1 = Number(document.getElementById("no2").value)
    var n2 = Number(document.getElementById("no3").value)
    var n3 = Number(document.getElementById("no4").value)
    var avr = (n1+n2+n3) / 3
    document.getElementById('average').innerHTML='<h5>'+avr+'</h5>'
})

// Write an algorithm that determines the flying time between two cities given 
// the distance between them and the average speed of the airplane.
document.getElementById('btn3').addEventListener("click", () => {
    var n1 = Number(document.getElementById("distance").value)
    var n2 = Number(document.getElementById("speed").value)
    var time = (n1 / n2)
    document.getElementById('Time').innerHTML='<h5>'+time+'</h5>'
})


// Write an algorithm that calculates your BMI given your weight and height.
// The BMI is calculated using the weight divided by the height squared, where the weight in kg and height in m.
document.getElementById('btn4').addEventListener("click", () => {
    var n1 = Number(document.getElementById("weight").value)
    var n2 = Number(document.getElementById("height").value)
    var bmi = (n1 / (n2**2))
    document.getElementById('BMI').innerHTML='<h5>'+bmi+'</h5>'
})


// Write an algorithm to enter the length in centimeters and convert it to meters and kilometers.
document.getElementById('btn5').addEventListener("click", () => {
    var n1 = Number(document.getElementById("length").value)
    var meter = (n1 / 100)
    document.getElementById('in meter').innerHTML='<h5>'+meter+'</h5>'
})
document.getElementById('btn6').addEventListener("click", () => {
    var n1 = Number(document.getElementById("length").value)
    var kilometer = (n1 / 1000)
    document.getElementById('in kilometer').innerHTML='<h5>'+kilometer+'</h5>'
})

// Write an algorithm to enter data in bytes and converts it in bit and gigabytes
document.getElementById('btn7').addEventListener("click", () => {
    var n1 = Number(document.getElementById("data").value)
    var bit = (n1 * 8)
    document.getElementById('in bit').innerHTML='<h5>'+bit+'</h5>'
})
document.getElementById('btn8').addEventListener("click", () => {
    var n1 = Number(document.getElementById("data").value)
    var gigabytes = (n1 / 1024)
    document.getElementById('in gigabytes').innerHTML='<h5>'+gigabytes+'</h5>'
})


// Write an algorithm that calculates the time needed to upload a file given the upload speed and file size.
document.getElementById('btn9').addEventListener("click", () => {
    var n1 = Number(document.getElementById("no5").value)
    var n2 = Number(document.getElementById("no6").value)
    var uploadtime = (n1 / n2)
    document.getElementById('uploadtime').innerHTML='<h5>'+uploadtime+'</h5>'
})



// Write an algorithm that calculates the time needed to upload a file in seconds given the upload speed in Mbps and file size in GB.
document.getElementById('btn10').addEventListener("click", () => {
    var n1 = Number(document.getElementById("no7").value)
    var n2 = Number(document.getElementById("no8").value)
    // Convert file size from GB to bits
    var fileSizeBits = n1 * 1024 * 1024 * 1024 * 8;
    // Convert upload speed from Mbps to bits per second
    var uploadSpeedBps = n2 * 1000000;
    var time = (fileSizeBits / uploadSpeedBps)
    document.getElementById('time').innerHTML='<h5>'+time+'</h5>'
    //console.log(uploadSpeedBps)
    //console.log(uploadSpeedBps)
    //console.log(time)
})


// Given the radius of circle, determine the area and circumference.
document.getElementById('btn11').addEventListener("click", () => {
    var n1 = Number(document.getElementById("radius").value)
    var area = ((n1 ** 2) * 3.14)
    document.getElementById('area').innerHTML='<h5>'+area+'</h5>'
})
document.getElementById('btn12').addEventListener("click", () => {
    var n1 = Number(document.getElementById("radius").value)
    var cir = (n1 * 3.14 * 2)
    document.getElementById('cir').innerHTML='<h5>'+cir+'</h5>'
})


// Write an algorithm that takes as inputs two numbers and swaps their values.
document.getElementById('btn13').addEventListener("click", () => {
    var n1 = Number(document.getElementById("no9").value);
    var n2 = Number(document.getElementById("no10").value);
    
    // Swap the values
    var temp = Number(n1);
    n1 = Number(n2);
    n2 = Number(temp);

    // Display the swapped values
    document.getElementById('swap2').innerHTML='<h5>n1: ' +n1+ ', n2: ' +n2+ '</h5>'
    console.log(n1)
    console.log(n2)
})
