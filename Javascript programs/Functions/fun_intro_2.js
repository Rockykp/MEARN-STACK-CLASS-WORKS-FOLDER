//function to work with any number of argumnets  using args

function addNumbers(...args){ // ...args will act as an array // function to find sum of numbers in args
    let res=0;
    for(let num of args){
        res+=num;
    }
return res;
}

console.log(addNumbers(10,20)); 
console.log(addNumbers(10,20,30));
console.log(addNumbers(10,20,30,40,50));

// arrays, 

