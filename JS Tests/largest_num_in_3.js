var num1=6;
var num2=6;
var num3=6;

if(num1>num2 & num1>num3){
    console.log(`Largest number is ${num1}`);
}
else if(num2>num1 & num2>num3){
    console.log(`Largest number is ${num2}`);
}
else if(num3>num1 & num3>num2){
    console.log(`Largest number is ${num3}`);
}
else if(num1==num2 & num1==num3){
    console.log(`All numbers are equal`);
}