// print all expenses above 25000

var expenses=[20000,27000,30000,27000,24000,40000,60000]
var limit=25000;
for(let exp of expenses){
    if(exp>limit){
        console.log(exp);
    }
}