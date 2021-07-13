// array methods -> reduce method

var arr=[3,4,2,8,7,9]


// find sum of an array using reduce method

var total=arr.reduce((num1,num2)=>num1+num2)
//console.log(total);

// find maximum value in an array using reduce method

var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
//console.log(max);

//find minimum value in an array using reduce method

var min=arr.reduce((num1,num2)=>num1>num2?num2:num1)
//console.log(min);