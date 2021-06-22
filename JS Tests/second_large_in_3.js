var num1=9;
var num2=9;
var num3=9;

if((num1>num2) & (num1>num3)){ 

    if(num3>num2){
        console.log(`Second Larget Number is ${num3}`);
    }
    else{
        console.log(`Second Larget Number is ${num2}`);
    }

}
else if((num2>num1) & (num2>num3)){ 

    if(num1>num3){
        console.log(`Second Larget Number is ${num1}`);
    }
    else{
        console.log(`Second Larget Number is ${num3}`);
    }

}
else if((num3>num1) & (num3>num2)){ 

    if(num2>num1){
        console.log(`Second Larget Number is ${num2}`);
    }
    else if(num1>num2){
        console.log(`Second Larget Number is ${num1}`);
    }

}
else if(num1==num2 || num1==num3){
    console.log("There are equal numbers");
}

