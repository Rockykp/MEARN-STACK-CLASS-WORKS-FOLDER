// step1 create function for displaying numbers

// function displayNumber(num){
//     //document.querySelector("#inpt").value=num;  // this method is also correct but below one is simplified method we can use if we are using id in html tag line.
//     inpt.value+=num; // we can also use this method because we are using id in html tagline.
// }

//changing above function to simple code using arrow function
let displayNumber=(num)=>inpt.value+=num;

// function evaluateExpression(){
//     let res=eval(inpt.value);
//     inpt.value=res;
// }

//changing above function to simple code using arrow function
let evaluateExpression=()=>inpt.value=eval(inpt.value)

// function clearBox(){
//     inpt.value="";
// }

//changing above function to simple code using arrow function
let clearBox=()=>inpt.value="";

// function removeLastElement(){
//     inpt.value=inpt.value.slice(0,-1)
// }

//changing above function to simple code using arrow function
let removeLastElement=()=>inpt.value=inpt.value.slice(0,-1);