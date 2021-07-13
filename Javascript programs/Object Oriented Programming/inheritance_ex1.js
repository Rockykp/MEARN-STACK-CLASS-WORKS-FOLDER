// inheritance example 1

class Person{
    setPerson(name,age){
    this.name=name;
    this.age=age;
    }
    printPerson(){
        console.log(this.name,this.age);
    }
}

class Student extends Person{ // single inheritance using extends keyword.

    setStudent(rol,course){

        this.rol=rol;
        this.course=course;
    }
    printStudent(){
        console.log(this.rol,this.name,this.age,this.course); // we have all details in person class in student class because we inherited parent class details to child class.
    }
}

var student=new Student();
student.setPerson("RAM",25)
student.setStudent(100,"BCA")
student.printStudent();
student.printPerson();

