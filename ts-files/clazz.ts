class Person {
    constructor(name) {
        this.name = name;
        console.log(`Person constructor`)
    }
    static hello() {
        console.log(`from static method ${this.name}`)
    }
    greet() {
        console.log(`hello ${this.name}`)
    }
    getId() {
        return 10;
    }
}


class Employee extends Person {
    constructor(name) {
        super(name)
        console.log(`Employee constructor`)
    }
    getId() {
        return super.getId()
    }
}


let p = new Person('chandler');

console.log(typeof Person) // function

console.log(p.greet === Person.prototype.greet)

Person.hello();

p.greet();

let e = new Employee("lol employee");
e.greet()
Employee.hello()
e.getId()