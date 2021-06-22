// Check if an elemnt is present in given array

var arr=[10,11,13,45,50,51];

var elem=12;

var flag=0;
for(let num of arr){
    if(elem==num){
        flag++;
        break;
    }
}
console.log(flag==0?"element not found":"element found");