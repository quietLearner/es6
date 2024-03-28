"use strict";

var a = 3;
console.log(typeof a);

var d = [];
console.log(typeof d); //object
console.log(Object.prototype.toString.call(d)); //[object Array]

function Person(name) {
  this.name = name;
}

var e = new Person("chandler");
console.log(typeof e); //object
console.log(e instanceof Person); //true

console.log(typeof undefined); //undefined
console.log(typeof null); //object, bug?
