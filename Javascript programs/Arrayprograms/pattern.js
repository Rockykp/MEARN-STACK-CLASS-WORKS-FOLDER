//arr=>3,4,5  //output=>9,8,7 - first sum of all numbers in array, sum minus each object in array, push each elemnt after minus operation to array.
//12-3=9
//12-4=8
//12-5=7

var arr=[4,5,6];
var sum=0;
for(let num of arr){
    sum+=num;
}
var out=[];
for(let num of arr){
    let res=sum-num;
    out.push(res)
}
console.log(out);