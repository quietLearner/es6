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

//these two are the same
var multiplyByTwo = multiply.bind(this, 2);
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
