//IIFE immediately invoked function expression

//function statement
function greet(name) {
  console.log("hello " + name);
}

greet("john");

// function expression
var greetFunc = function (name) {
  console.log("hello " + name);
};
greetFunc("doe");

// this is iife
var greeting = (function (name) {
  console.log("hello " + name);
  return "hello " + name;
})("chandler");

console.log(greeting);

1; // this is fine

("abc"); //this fine

// but anonymouse function is not fine
// Function statements require a function name
// function (name) {
//   return "hello " + name;
// }

3 + 4;

// always put expression in the (), i have a functioin, but not doing anything
(function (name) {
  var greeting = "hello";
  console.log(greeting + " " + name);
});

(function (name) {
  var greeting = "inside iife hello";
  console.log(greeting + " " + name);
  console.log(this); //window
})("chandler");
