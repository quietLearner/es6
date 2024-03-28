//es6 class

// this is still object(function)
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    // console.log(this);
    return "hi " + this.firstname;
  }
}

let john = new Person("john", "doe");
console.log(john.firstname);
console.log(john.greet());

class AnotherPerson extends Person {
  constructor(firstname, lastname) {
    super(firstname, lastname);
  }
}

let jane = new AnotherPerson("chandler", "bing");
console.log(jane.greet());
