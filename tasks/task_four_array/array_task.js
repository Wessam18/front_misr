//1.Write an algorithm that reverses the order of elements of the given array.
var arr = [1, 2, 3, 4, 5]
var rev = []
for (var i = (arr.length - 1); i >= 0; i--) {
    rev.push(arr[i])
}
console.log(rev)


//2.Write an algorithm that inputs 10 numbers in an array using a for loop.
var arr1 = []
for (var a = 0; a < 10; a++) {
    var n = Number(prompt("enter ur num "))
    arr1.push(n)
}
console.log(arr1)

//3.Write an algorithm that inputs 10 numbers in an array using a while loop. 
var arr2 = []
var b = 0
while (b < 10) {
    var n1 = Number(prompt("enter ur num "))
    arr2.push(n1)
    b++
}
console.log(arr1)

//4.Write an algorithm to print an array.
arr3 = [1, 2, 3, 4, 5]
console.log(arr3)


//1.Write an algorithm to print an array in reverse.
arr4 = [1, 2, 3, 4, 5]
console.log(arr4.reverse())

//2. Write an algorithm to copy all elements from an array to another array.
var arr5 = [1, 2, 3, 4, 5]
var rev1 = []
for (var c = 0; c < arr5.length; c++) {
    rev1.push(arr5[c])
}
console.log(rev1)



//5.Write an algorithm to find the sum of all array elements.
//3.Write an algorithm to find the number of occurrences of an element in an array. Given the element and the array.
//4.Write an algorithm to print all negative elements in an array. and 9. Write an algorithm to count the total 
//number of negative elements in an array.
//8. Write an algorithm to count the total number of even and odd elements in an array.

var x = [1,-3,7,8,-12,-1,3,5,7,8,7,7,7,-7,0,0,0,0];
var res = 0, sum = 0, sum1 = 0;
var z = [], odd = 0, even = 0;
for (var count = 0; count < x.length; count++) {
    sum += x[count]; 

    if(x[count] === 7){
        res++
    }
    if (x[count] < 0) {
        sum1 += x[count]
        z.push(x[count])
    }
    if(x[count] % 2 === 0){
        even += x[count]
    } else {
        odd += x[count]
    }
}
console.log(sum)
console.log (res)
console.log(sum1)
console.log(z)
console.log(even)
console.log(odd)


//6.Write an algorithm to find the maximum and minimum element in an array.
var arr = [3, 1, 8, 4, 6, 2, 7, 5];
var max = arr[0];
var min = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(max);
console.log(min);



//7.Write an algorithm to find the second largest element in an array.
var arr = [3, 7, 1, 8, 4, 6, 2, 9, 5];
var largest = arr[0];
var second = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        second = largest;
        largest = arr[i];
    } else if (arr[i] > second && arr[i] !== largest) {
        second = arr[i];
    }
}
console.log(second);

//1.Write an algorithm that given an array of integers A moves all even elements in an array of integers
//to the front of the array and all odd elements to the rear
var arr = [1,4,5,6,2,10]
var sort = []
for (var count = 0; count < arr.length; count++) {
    if(arr[count] % 2 === 0){
        sort.push(arr[count])
        arr.splice(count, 1); // Remove the element from the original array
        count--; // Adjust the counter to account for the removed element
    }
}
for (var count = 0; count < arr.length; count++) {
    sort.push(arr[count])
}
console.log(sort);



//2.write an algorithm that sorts an array ascendingly .
var arr = [5, 2, 9, 1, 7, 4, 8, 3, 6];

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
}
console.log(arr)
