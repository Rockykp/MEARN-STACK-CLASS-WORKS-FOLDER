//print highest number form the given array 

var arr = [10, 20, 30, -20, -40, -10];

var high = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > high) {
        high = arr[i];
    }
} 
console.log(`Higest number is ${high}`);