/*
  pure prototypcal inheritance


*/
var person = {
  firstname: "default",
  lastname: "default",
  greet: function () {
    //return "hi " + firstname; //not defined, error
    return "hi " + this.firstname;
  },
};

var john = Object.create(person);
console.log(john); //{} empty

john.firstname = "john";
john.lastname = "doe";
console.log(john); // {firstname: 'john', lastname: 'doe'}
console.log(john.greet()); //hi john

// polyfill
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error(
        "Object.create implementation" + " only accepts the first parameter."
      );
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}
