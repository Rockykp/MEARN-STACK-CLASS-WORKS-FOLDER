class Employee {
    constructor(id, name, desig, salary, exp) {
        // initialize arguments in constructor
        this.id - id;
        this.name = name;
        this.desig = desig;
        this.salary = salary;
        this.exp = exp;
    }
}

// create 5 employee objects

// var emp1=new Employee(1000,"Rocky","Developer",25000,3);
// var emp2=new Employee(1001,"Rohil","Designer",22000,2);
// var emp3=new Employee(1002,"Rahul","QA",20000,1);
// var emp4=new Employee(1003,"Rijil","Developer",21000,1);
// var emp5=new Employee(1004,"Sibi","Sales",23000,2);

// var employees=[]
// employees.push(emp1,emp2,emp3,emp4,emp5);

var employees = [new Employee(1000, "Rocky", "Developer", 25000, 3),
new Employee(1001, "Rohil", "Designer", 22000, 2),
new Employee(1002, "Rahul", "QA", 20000, 1),
new Employee(1003, "Rijil", "Developer", 21000, 1),
new Employee(1004, "Sibi", "Sales", 23000, 2)
]
//console.log(employees);

// print highest salaried employee

var HighestSalary = employees.reduce((obj1, obj2) => obj1["salary"] > obj2["salary"] ? obj1 : obj2)
console.log("Highest salary", HighestSalary);

// sort employees according with their exp

var SortOnSalary = employees.sort((obj1, obj2) => obj1["exp"] - obj2["exp"])
console.log(SortOnSalary);

// check if there is any employee working as QA

var searchSome = employees.some(obj => obj["desig"] == "QA")
console.log(searchSome);


