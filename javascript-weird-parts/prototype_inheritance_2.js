//reflection, extend

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
//reflection

// will print john and proto's property as well
for (var prop in john) {
  console.log(prop + ": " + john[prop]);
}
/*
firstname: john
main.js:24 lastname: doe
main.js:24 getFullName: function () {
    return this.firstname + " " + this.lastname;
  }
*/

// only print john own property
for (var prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(prop + ": " + john[prop]);
  }
}
/*
firstname: john
main.js:38 lastname: doe
*/
