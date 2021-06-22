var arr=[8,10,11,9,12,7,13];
var elem=14;
var flag=0;
arr.sort((num1,num2)=>num1-num2);
var low=0,upp=arr.length-1;
while(low<upp){

    let mid=Math.floor((low+upp)/2);

    if(elem>arr[mid]){
        low=mid+1;
    }
    else if(elem<arr[mid]){
        upp=mid-1;
    }
    else if(elem==arr[mid]){
        flag++;
        break;

    }
}
console.log(flag==0?"element not found":"element found");