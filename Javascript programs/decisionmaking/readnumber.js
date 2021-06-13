// read num
//num / by 3 print fiz
//num / by 5 print buz
//num / 15 print fizbuz

var num=105;

// if(num%15==0){
//     console.log("FizBuz");
// }
// else if(num%3==0){
//  console.log("Fiz");
// }
// else if(num%5==0){
//     console.log("Buz");
// }

var result="" // empty string so once the result is ready we can fill it

if(num%3==0){ // 15%3==0 // true
    result+="Fiz"; // result=fiz
}
if(num%5==0){ // 15%5==0 // true
    result+="Buz"; // result=fiz+buz
}
console.log(result); // fizbuz
