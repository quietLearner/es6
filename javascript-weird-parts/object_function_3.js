// function is object

function greet() {
    console.log('hi')
}

// function has property!!!
greet.language = 'english';

console.log(greet)
console.log(greet.language)

//function statement, does work
var a;

if (a === 3) {

}

//function expression, result(create) a value

greet1(); //hi, this is ok, because hoisting

// fucntion statement
function greet1() {
    console.log('hi')
}

// fucntion expression, it result a value
var anonymouseGreet = function () {
    console.log('hello')
}
console.log(typeof anonymouseGreet) //function

anonymouseGreet()



console.log(b) //underfined
var b = 10;
console.log(b)

//anonymouseGreet1() //becuase hoisting js engine init all var to underfined, anonymouseGreet1 is not a function, because anonymouseGreet1 not defined yet when the code is running here

var anonymouseGreet1 = function abc() {
    console.log('hello abc')
}


function log(a) {
    a();
}

log(function () {
    console.log('func')
})




