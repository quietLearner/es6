
//https://youtu.be/Bv_5Zv5c-Ts?si=gryTZl5Pi27iNs1N

// hoisting
b(); // ok
console.log(a); //underfined

if (a === undefined) {
    console.log('a is undefined')
}

var a = 10;

function b() {
    console.log("func b")
}
