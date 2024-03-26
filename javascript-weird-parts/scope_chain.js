//create global execution context and this(window) and set up memory

// outer reference related to  lexical environment
/*
lexical
relating to the words or vocabulary of a language.

function b() is written inside global env, not inside a(), so it will look myVar from global env
*/
function b() {
  console.log(`myVar in b(): ${myVar}`); //??? what's value? see javascript_variable_outer_eniroment.png
}

function a() {
  var myVar = 2;
  b(); //create its own execution context
  d();
  /*
    function d() written inside a(), on the same level of var myVar = 2;
    so it's outer lexcial reference is related to lexical position.
    it will look myVar from functioin a's execution context, not global exection context
    */
  function d() {
    console.log(`myVar in d(): ${myVar}`); // 2
  }
}

var myVar = 1;
a(); //create its own execution context
