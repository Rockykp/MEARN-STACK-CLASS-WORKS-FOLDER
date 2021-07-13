
// array methods -> map method

var arr=[3,4,2,8,7,9]

//find square of all objects in the array using map method

var squares=arr.map((num)=>num**2);  // map funtion can always have only one parameter (num) and will apply the function to all objects in that array.
console.log(squares);

//find cube of all objects in the array using map method

var cube=arr.map((num)=>num**3)
console.log(cube);

