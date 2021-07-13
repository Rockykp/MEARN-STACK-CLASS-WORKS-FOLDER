// inheritance example 2

class Parent{
    phone(){
        console.log(`Samsung A6`);
    }
}

class Child extends Parent{ // this how we get all properties of parent class into a child class, it is inheritance. this is single inheritance.

}

var child= new Child(); // this how we define refernce name for a class.
child.phone();

