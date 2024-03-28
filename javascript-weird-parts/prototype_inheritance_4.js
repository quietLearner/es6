var a = new Number(3);
console.log(a); //object, not primitive

console.log(a.toFixed(2)); //3.00

//do not do this. dont add method on JavaScrpt Object or function, add to your own object
String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
};

console.log("abc".isLengthGreaterThan(5));

Number.prototype.isPositive = function () {
  return this > 0;
};

console.log(new Number(3).isPositive()); //true

// console.log(3.isPositive()); //Invalid or unexpected token

Array.prototype.myCoolFuture = "cool";

var arr = ["a", "b", "c"];

// do not use for in for array
for (var prop in arr) {
  console.log(prop + ": " + arr[prop]); //0: a
}
