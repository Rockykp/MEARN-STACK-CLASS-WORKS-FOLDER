// Find factorial of a given number 
// ex: 5(1*2*3*4*5)

var num=6;
var f1=1;
var f2=1;
while(f2<=num){
    f1=f1*f2;
    f2+=1;
}
console.log(f1);