//const getFullName = require("./foo"); // just one import
const foo = require("./foo"); // more than one import

//console.log(getFullName("zhongyi", "wu"));

console.log(foo.getSurname("lol", "wu"));

if (1 === 1) {
  const foo1 = require("./foo1"); // more than one import
  console.log(foo1.getFullName("lol", "haha"));
}

if (2 == 2) {
  // this is descructuring form es6
  const { getFullName, getSurname } = require("./foo1"); // more than one import
  console.log(getFullName("111", "222"));
}
