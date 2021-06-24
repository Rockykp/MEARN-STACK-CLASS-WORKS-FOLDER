// var arr=[4,3,2,7,8,9]   o/p [3,2,1,8,9,10] 
//using array method if object less than 5, dicrement 1 and greater than 5, add 1 to object in above array.

var arr=[4,3,2,7,8,9]

var lowFive=arr.filter((num)=>num<5)

var highFive=arr.filter((num)=>num>5)

console.log(lowFive.map(num=>num-=1).concat(highFive.map(num=>num+=1)));


