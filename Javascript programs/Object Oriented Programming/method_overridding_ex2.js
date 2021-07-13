class Rectangle{
    area(...args){
        //console.log(args);
        console.log("area rectangle", args[0]*args[1]);
    }
}

class Shape extends Rectangle{
    area(...args){
        //console.log(args);
        super.area(args[0],args[1])
        console.log("shape area",args[2]*args[2]);
    }
}

var shape=new Shape();
shape.area(10,10,20)