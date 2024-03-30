//call, apply, bind, change this in function execution context

var person = {
  firstname: "john",
  lastname: "doe",
  getFullName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

var logName = function (lang1, lang2) {
  //console.log(arguments.callee);
  console.log("logged: " + this.getFullName()); // this = global object
  console.log("arguments: " + lang1 + " " + lang2);
};

//logName(); //this.getFullName is not a function

/**
 * bind person to "this" inside the logName function to replace window
 */
var logPeronsName = logName.bind(person); // this is a function
logPeronsName();
logPeronsName("en");

logName.call(person, "en", "es");
logName.apply(person, ["en", "es"]);

// do it on the fly
(function (lang1, lang2) {
  //console.log(arguments.callee);
  console.log("logged: " + this.getFullName()); // this = global object
  console.log("arguments: " + lang1 + " " + lang2);
}).apply(person, ["ca", "fr"]);

//call, apply, bind, change this in function execution context
// function borrowing
var person = {
  firstname: "john",
  lastname: "doe",
  getFullName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

var person2 = {
  firstname: "jane",
  lastname: "doe",
};

console.log(person.getFullName.apply(person2));

//function currying, create a copy of functioin with preset parameters
function multiply(a, b) {
  return a * b;
}

//these two are the same, why pass this? we acutally does NOT care this, we can pass anything in, we only care about parameters
var multiplyByTwo = multiply.bind(this, 2); // it create a copy of the mutiply function with a set to 2
console.log(multiplyByTwo(3)); // 6

function _multiplyByTwo(b) {
  var a = 2;
  return a * b;
}

var multiply4 = multiply.bind(this, 2, 2);

function _multiply4() {
  var a = 2;
  var b = 2;
  return a * b;
}
console.log(multiply4(3)); // 4


// this is currying es6
function add(a) {
  return function (b) {
    return a + b;
  };
}

//N => 1
console.log(add(1)(5));

const sub = (a) => (b) => a - b;
console.log(sub(5)(2));
