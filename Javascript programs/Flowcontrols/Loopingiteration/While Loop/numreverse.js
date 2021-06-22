//123 number 


var num=123;
while(num!=0){
    let digit=num%10; // let only have scope in a block or in {}, var is global and scope is not limited to block
    console.log(digit);
    num=math.floor(num/10);
}

// printing 321 in online

var num=123;
var res="";
while(num!=0){
    let digit=num%10; 
    res+=digit;
    num=math.floor(num/10);
}
console.log(res);

// printing 321 as a number type
var num=123;
var res=0;
while(num!=0){
    let digit=num%10; 
    res=(res*10)+digit;
    num=math.floor(num/10);
}
console.log(res);
