
var a = 3 + 4; //operator is function
console.log(a)

//    + 3 4// prefix
// 3 4+ // postfix
3 + 4 //infix


//operator precedence and associativity
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

var b = 3 + 4 * 5;// 3 function calls, Multiplication, , Addition and Assignment. 

var e = 2, f = 3, g = 4;

//assignment is right to left(associativity )
e = f = g; // f = g, return 4, e=4, return 4

console.log(e) //4
console.log(f)
console.log(g)

//coercion = convert a value from one type to another
var h = 1 + '2';//12 string

//comparison operator: <, >, !=
//true
console.log(2 < 3 < 4); //true

console.log(true < 4); //true

//true, false < 1
console.log(3 < 2 < 1); //true

//true, 0 < 1
console.log(false < 1); //true

console.log(Number(false)) // 0
console.log(Number(true)); // 1
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
/**
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion
 *  Booleans are returned as-is.
    undefined turns into false.
    null turns into false.
    0, -0, and NaN turn into false; other numbers turn into true.
    0n turns into false; other BigInts turn into true.
    The empty string "" turns into false; other strings turn into true.
    Symbols turn into true.
    All objects become true.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
 *
 */

// existence and boolean
console.log(Boolean(" ")) //true

console.log(Boolean(undefined)) //false
console.log(Boolean(null)) //false
console.log(Boolean("")) //false
console.log(Boolean(0)) //false

var i; // i = 0
if (i) {
    console.log('something is there')
}

/*
https://developer.mozilla.org/en-US/docs/Glossary/Falsy

https://developer.mozilla.org/en-US/docs/Glossary/Truthy
That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all

x || y
If x can be converted to true, returns x; else, returns y.

*/
//default values,
function greet(name) {
    name = name || '<your name here>';// default value
    console.log('hello ' + name);
}

greet('lol');
greet();
