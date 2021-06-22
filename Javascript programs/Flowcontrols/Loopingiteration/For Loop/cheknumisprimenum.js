// chk number is prime number or not

var num=8; // check if given number is able to divided by 1 to that given number
var flag=0;
for(let i=2;i<num;i++){ //i=2 i=3 i=4 i=5 i=6 7<7
    if(num%i==0){ // 7%2==0 7%3==0 7%4==0 7%5==0 7%6==0 //enter to this loop if there is a factor
        flag+=1;
    }
}

if(flag==0){ // 0==0
    console.log("It is a Prime Number")
}
else{
    console.log("not prime");
}