//set
let mySet = new Set();
mySet.add('hello');
mySet.add(2);
mySet.add(2);

let ob1 = {};
let ob2 = {};

mySet.add(ob1);
mySet.add(ob2);

console.log(mySet.size) //4


let mySet2 = new Set([1, 2, 3, 4, 5, 5, 6])
console.log(mySet2.size); //6

let chainSet = new Set().add('hello').add(1);

console.log(chainSet);

console.log(chainSet.has('hello')) //true

console.log(chainSet.delete('hello')) //true

console.log(chainSet.delete(-100)) //false

//weak set
let mySet3 = new Set();
let key = {};
mySet3.add(key);
console.log(mySet3.size); //1
key = null;
console.log(mySet3.size); // 1
console.log(mySet3.has(key));// false

// if key is object
let weakSet1 = new WeakSet();
let key1 = {};
weakSet1.add(key1);
console.log(weakSet1.has(key1)); // true
key1 = null;
console.log(weakSet1.has(key1)); // false