// Array Methods in JS

// ES6

//

// arrow function // to reduce length of the code and make it more readbilty

// add function with out an array method

// function add(num1,num2){
//     return num1-num2;
// }

// how to simplify above code using arrow function

let add=(num1,num2)=>(num1+num2); // by default it will return value of num1+num2

//subtract function with out an array method

// function sub(num1,num2){
//     return num1-num2;
// }

// subtract using arrow function

let sub=(num1,num2=> num1+num2);


// cube function with out an array method

// function cube(num){
//     return num**3;
// }

//cube using arow function

//let cube=(num)=>num**3

// subtract only with higest value always using arrow function

let sub1=(num1,num2)=>num1>num2?num1-num2:num2-num1;

console.log(sub1(200,400));
// console.log(add(20,20));
// console.log(cube(3));
// console.log(sub(20,20));


// odd or even using arrow function

// let oddEven=(num)=>num%2==0?"even":"odd";

// console.log(oddEven(32));

