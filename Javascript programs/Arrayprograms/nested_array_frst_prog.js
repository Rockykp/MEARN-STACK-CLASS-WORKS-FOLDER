var emp=[
    [100,"Ram",20000,"Developer"],
    [101,"Ravi",22000,"Developer"],
    [102,"Raju",25000,"Web"],
    [103,"Nithin",20000,"Web"]
];

// Print Employee names only

for(let names of emp){

        console.log(names[1]);

}

 // print designation developer only

for(let desig of emp){

    if(desig[3]=="Web"){

    console.log(desig[1]);
    }
}

// print employes details whose salary is > 21000

for(let salary of emp){
    if(salary[2]>21000){
        console.log(salary);
    }
}
