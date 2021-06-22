var arr=[10,8,11,9,12,7,13]

// procedure BINRSRCG(arr,low,upp,element,mid)

// step1 => sort the array

//method to sort array

//    arr.sort(arr);   //object level sorting // outpt=> [10,11,12,7,8,9] 

arr.sort((num1,num2)=>num1 - num2);  // {(num1<num2?-1:1)} -> num1-num2 is simplest form to sort it in accending order and {(num2<num1?1:-1)} -> num2-num1 is simplest form to sort it in decending order 
console.log(arr);  // output of array after sorting in accending order => arr[7,8,9,10,11,12,13]

// var names=["rocky","sibi","micku"];
// names.sort();                   // strings are sort in alphapetic order by default.
// names.sort((a,b)=>b-a);         // if we need to sort string in reverse alphabetic order.
// console.log(names);

// step2 => set lower and upper elements

 var low=0,upp=arr.length-1;

 // find mid of the array and set mid element

 var mid=Math.floor((low+upp)/2);  // mid=(0+6)/2 = 3;






