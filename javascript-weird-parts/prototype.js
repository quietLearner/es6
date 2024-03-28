//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// method 1: set up prototype Object.create
// so this is the prototype
const personPrototype = {
  name: "lol",
  greet() {
    console.log("hello!");
  },
};

//The Object.create() method creates a new object carl, and assing personPrototype as carls's prototype
const carl = Object.create(personPrototype);
carl.greet(); // hello!
console.log(Object.getPrototypeOf(carl));

// method 2: set up prototype, constructor
const personPrototype2 = {
  age: 23,
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Person.prototype = personPrototype2;

const reuben = new Person("Reuben");
console.log(Object.getPrototypeOf(reuben));
