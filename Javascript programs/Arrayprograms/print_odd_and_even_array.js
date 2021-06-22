// print odd and even numbers seprately from the following array

var num=[10,11,12,13,14,15,16];
var odd=[],even=[];
for(let i of num){
    if(i%2==0){
        even.push(i)
    }
    else{
        odd.push(i);
    }
}
console.log("This is even numbers in the array", even);
console.log("This is odd numbers in the array", odd);

// for(let j of even){
//     console.log("This is an even number in the array", j);
// }
// for(let k of odd){
// console.log("This is an odd number in the array", k);
// }

