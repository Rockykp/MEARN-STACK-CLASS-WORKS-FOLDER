// multilevel inheritance example1

// multiple inheritance is not supported in java script. interface concept in typescript.

class Parent{ // only have parent detials and not inherited to any other class.

    m1(){
        console.log("inside parent");
    }
    
}

class Child extends Parent{ // inherited parent class.

    m2(){
        console.log("inside child");
    }
}

class SubChild extends Child{ // inherited child class who already inherited parent class. subchild will have both parent and child class details.
    m3(){
        console.log("inside sub child")
    }
}

var sub=new SubChild(); // multilevel inheritance - all parent class details is available in subchild class.
sub.m3();
sub.m2();
sub.m1();
