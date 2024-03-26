//
/*
when js program is running, or function is called, it creats
1. global execution contex
2. variable enviroment and function code
3. this
4. outer envirnenment reference
5. arguemtns
*/

//create global execution context and this(window)

function b() {
  var myVar;
  console.log(`myVar in b(): ${myVar}`);
}

function a() {
  var myVar = 2;
  console.log(`myVar in a(): ${myVar}`);
  b(); //create its own execution context
}

var myVar = 1;
console.log(`myVar in global context: ${myVar}`);
a(); //create its own execution context
console.log(`myVar in global context: ${myVar}`);
