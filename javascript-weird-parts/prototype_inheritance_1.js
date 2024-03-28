// prototypal inheritance
var person = {
  firstname: "default",
  lastname: "default",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

var john = {
  firstname: "john",
  lastname: "doe",
};

//console.log(john.getFullName()); // not a function

//do not do this ever, for demo only
john.__proto__ = person;

console.log(john.getFullName()); //john doe, even this refer to john , not person

var jane = {
  firstname: "jane",
};

jane.__proto__ = person;
console.log(jane.getFullName()); //jane default, this point to jane and person. wow
console.log(jane.lastname);

//everthing is javascript is object or primitive
var a = {};
var b = function () {};
var c = [];
console.log(a.__proto__); // Object, has toString(), valueOf() etc
console.log(b.__proto__); // function()
console.log(c.__proto__); // has filter, every, find, forEach etc
console.log(a.__proto__.__proto__); // null
console.log(b.__proto__.__proto__); // Object, has toString(), valueOf() etc, at the base is Object
console.log(c.__proto__.__proto__); // Object, has toString(), valueOf() etc, at the base is Object
