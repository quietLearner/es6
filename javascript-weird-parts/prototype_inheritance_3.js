/**
 * function constructor is function to crate object, that's all, nothing special.
 *
 * this is the object, not window
 *
 * not return statement is needed. object will return automatically
 *
 *and it sets prototype automatically as well
 */

//function constructor, its job is to create object
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  console.log(this); //Person, not window

  //return {};// dont do this
}

/**
 * why not put  getFullName() inside Person(), because it take memory space. every object created will have its own copy of getFullName().
 *
 * if put on Person.prototype, there is only one copy for any number of objects
 *
 *
 */
//set prototype to Person, which is an function(with new)
Person.prototype.getFullName = function () {
  return this.firstname + " " + this.lastname;
};

//new is operator
/**
 * 1. new create an empty object {}
 * 2. invoate function Person(), point this at the aforementioined object
 */
var john = new Person("john", "doe");
console.log(john);
console.log(john.getFullName());

console.log(john.__proto__); //getFullName:f
