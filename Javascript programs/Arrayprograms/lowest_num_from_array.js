//print lowwest number form the given array 

var arr = [10, 20, 30, -20, -40, -10];

var low = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < low) {
        low = arr[i];
    }
} 
console.log(`Lowest number is ${low}`);