var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomatto",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:0},
    {code:1004,name:"potatto",mrp:45,aval_qty:40},
    {code:1005,name:"banana",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:58,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:50,aval_qty:5},
]

// print all products whose price is less than 50rs

var less50=products.filter(item=>item.mrp<50)
console.log(less50);

//print all products in rage of 30-50.

var range=products.filter(item=>item.mrp>30 & item.mrp<50)
console.log(range);

// print out of stocks products.

var outOfStock=products.filter(item=>item.aval_qty==0)
console.log(outOfStock);





