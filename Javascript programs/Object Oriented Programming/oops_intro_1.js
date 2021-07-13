//object oriented programming

//class - template|designpattern|plan
//object - real world entity
//reference - to do operations on an object

//First example class - reference - object

// class Person{
//     setPerson(age,name,gender){
//         this.age=age;
//         this.name=name;
//         this.gender=gender;
//     }
//     printDetails(){
//         console.log(this.name,this.age,this.gender);
//     }
// }

// var person=new Person(); //created an object with the characterstics of the class Person

// person.setPerson(25,'Rocky','Male');
// //person.printDetails();



// //second example class - reference - object

// class Employee{
//     setEmployee(eid,e_name,desig,salary){
//         this.eid=eid;
//         this.e_name=e_name;
//         this.desig=desig;
//         this.salary=salary;
//     }
//     printEmployee(){
//         console.log(this.eid,this.e_name,this.desig,this.salary);
//     }
// }

// var emp=new Employee()
// emp.setEmployee(101,'Rocky','Web Designer',25000)
// emp.printEmployee();

// Third Example
// this.name, this.roll, this.course => are instance variable
// this is used to point current class instance variables
// duty of setStudent() is to initialize instance variable
// inside class we can access an instance varaible using this.varaibale name
// outside the class we can access the instance variable using reference name.varibale name.
// constructors => duty is to initialize instance variable
// constructor name always same as classname in Java and C++
// in JS constructor name is always constructor()
// in python controctor name always _init_()
// constructor will automatically invoke during object creation, no need for separate method to call constructor.


//with out constructor

// class Student {
//     setStudent(roll, name, course, total) {
//         this.roll = roll;
//         this.name = name;
//         this.course = course;
//         this.total = total;
//     }
//     printDetails() {
//         console.log(this.roll, this.name, this.course, this.total);  // accessing the variable inside class
//     }
// }

// var stud1 = new Student()

//     stud1.setStudent(1001, 'Ram', 'MCA', 145)

// var stud2 = new Student
//     stud2.setStudent(1002, 'Sam', 'MCA', 146)

// stud1.printDetails()
// stud2.printDetails()


// using constructor 

class Student {
    constructor(roll, name, course, total) {
        this.roll = roll;
        this.name = name;
        this.course = course;
        this.total = total;
    }
    printDetails() {
        console.log(this.roll, this.name, this.course, this.total);
    }
}

var stud1 = new Student(1000, 'Ram', 'BCA', 145)
var stud2 = new Student(1001, 'Sam', 'MCA', 145)
stud1.printDetails();
stud2.printDetails();
console.log(stud1.total); // calling a variable outside the class using reference name and variable name in that class

// constructor second example 
class Employee{
        constructor(eid,e_name,desig,salary){
            this.eid=eid;
            this.e_name=e_name;
            this.desig=desig;
            this.salary=salary;
        }
        printEmployee(){
            console.log(this.eid,this.e_name,this.desig,this.salary);
        }
    }
    var emp1=new Employee(101,'Rocky','Web Designer',25000) // here when we write new Employee (), at this time the constructor defined inside the class will automaticlay invoke.
    var emp2=new Employee(102,'Biju','Web Designer',27000)
    emp1.printEmployee()
    emp2.printEmployee()
    console.log(emp1.e_name,emp2.e_name); // this how we can call a instance variable out side the class, using a reference name. emp1 is reference name and e_name is a local variable inside the class.