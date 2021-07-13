// many forms (more than one form) => polymorphism
// two types are there method overloading and method overiding.


// method overloading // same method name and different number of arguments
// in JS method overloading, only the latest defined method will invoke even we call any methods in that class.

class Calculation{
    add(){
        console.log("inside no arg method");
    }
    add(num1){
        console.log("inside single arg method");
    }
    add(num1,num2){
        console.log("inside two arg method");
    }
    add(...args){
        console.log("inside any number of argument method"); // only this method will invoke always even we call any methods in this class, so it does'nt make any sence to use method overloading in JS.
    }
}

var calc=new Calculation();
calc.add();
calc.add(10);
calc.add(10,20);




// method overriding // overiding can be done with different class and same method name and same arrguments signature // parent class should be extended to child class // all methods signature must be same(phone()).

class Parent{
    phone(){
        console.log("samsung A6");
    }
}
class Child extends Parent{
    phone(){
        //super.phone() // if we use keyword 'super'(to refer parent class) inside the child class(child class should be extented to parent class), we can invoke parent class methods inside the child class.
        console.log("iPhone");
    }
}

var child=new Child();
child.phone()