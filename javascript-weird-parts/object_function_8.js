//closure notorious

function greet(whattosay) {
  return function (name) {
    console.log(whattosay + " " + name); //scope chain
  };
}

greet("hi")("chandler");

var sayHi = greet("hi");
sayHi("joe");

//famouse example
function buildFunction() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

var fs = buildFunction();
fs[0](); //3
fs[1](); //3
fs[2](); //3

//solution 1: let variable, es6
function buildFunction2() {
  var arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

var fs2 = buildFunction2();
fs2[0](); //0
fs2[1](); //1
fs2[2](); //2

//solution 2: es5 iife
function buildFunction3() {
  var arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(
      (function (i) {
        return function () {
          console.log(i);
        };
      })(i)
    );
  }

  return arr;
}

var fs3 = buildFunction3();
fs3[0](); //0
fs3[1](); //1
fs3[2](); //2
