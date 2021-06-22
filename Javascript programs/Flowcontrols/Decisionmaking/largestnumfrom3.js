// find largest among 3 numbers
// var num1, num2, num3
var num1=60, num2=60, num3=60;

if(num1>num2 & num1>num3){
    console.log(`${num1} Is The Largest`);
}
else if(num2>num1 & num2>num3){
    console.log(`${num2} Is The Largest`);
}
else if(num3>num1 & num3>num2){
    console.log(`${num3} Is The Largest`);
}
else if(num1==num2 & num1==num3){
    console.log("All Three Numbers Are Equal");
}