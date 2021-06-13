// Find second largest number from 3 numbers
// sort these numbers in order (accending or deccending)

var num1=13,num2=13,num3=13;

if (num1>num2 & num1>num3) {
    if (num2>num3) {
        console.log(`${num2} is the second largest`);
    } else {
        console.log(`${num3} is the second largest`);
    }
} 
else if(num2>num1 & num2>num3){
    if (num1>num3) {
        console.log(`${num1} is the second largest`);
    } else {
        console.log(`${num3} is the second largest`);
    }  
}
else if(num3>num1 & num3>num2){
    if (num1>num2) {
        console.log(`${num1} is the second largest`);
    } else {
        console.log(`${num2} is the second largest`);
    }
}
else if(num1==num2 & num1==num3){
    console.log("all 3 numbers are equal");
}