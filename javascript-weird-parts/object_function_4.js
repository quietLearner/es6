/**
 * primitive pass by copy
 * 
 * object(function) pass by reference
 */
var a = 1;

console.log(a)

function passByCopy(a) {
    a = a - 1;
}

passByCopy(a)

console.log(a) // still 1

console.log('***************************************************************************')

var b = {
    name: "chandler"
}

var c = b; // b already exist, so point c and b in the same memory address
c.name = 'haha'

console.log("b:", b); //haha
console.log("c: ", c); //haha

function passByRef(b) {
    b.name = 'lol'
}

passByRef(b)

console.log("b:", b); //lol
console.log("c: ", c); //lol

/**
 * this is a special case, equals operator sets up new memory space(new address)
 */
c = { name: "this is interesting" };
console.log("b:", b); //lol
console.log("c: ", c); //this is interesting, why????