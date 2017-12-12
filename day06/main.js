'use strict';

// class Person{
//     say(){
//         console.log('hello');
//     }
// }
// var p = new Person();
// p.say();


// class继承
class Person{
    constructor(name){
        this.name = name;
    }
    say(){
        console.log(this.name+'说话了');
    }
}
var p = new Person('Jack');
p.say();

class Man extends Person{
    constructor(name){
        super(name);
    }
}
var m = new Man('Black');
m.say();

class Women extends Person{
    constructor(name){
        super(name);
    }
}
var w = new Women('Black');
w.say();
