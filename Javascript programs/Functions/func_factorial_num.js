// function to find factorial of a number

function fact(num){
    let res=1;
    for(let i=1;i<=num;i++){
        res=res*i;
    }
    return res;
}
console.log(fact(4));



