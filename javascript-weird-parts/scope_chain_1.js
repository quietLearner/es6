//create global execution context and this(window)

function a() {
  //var myVar = 2;
  d();
  /*
      function d() written inside a(), on the same level of var myVar = 2;
      so it's outer lexcial reference is related to lexical position.
      it will look myVar from functioin a's execution context, not global exection context
      if it can not find myVar in a's execution context, it will follow a's outer lexcial reference, which is global execution, and find myVar = 1
      */
  function d() {
    console.log(`myVar in d(): ${myVar}`); // 1
  }
}

var myVar = 1;
a(); //create its own execution context

function foo(a) {
  console.log(this); // window
  var c = 10;
  return function bar(b) {
    console.log(this); // window
    console.log(c + a + b); //17
    return a + b;
  };
}

console.log(this); // window

var f = foo(2);
var r = f(5);
console.log(r); //7

var obj = {
  name: "lol",
  display() {
    console.log(this); // this is obj
    console.log("lol");
  },
  hello: () => {
    console.log(this); // window, not obj
    console.log("haha");
  },
};

console.log(obj);
obj.display();
obj.hello();

console.log("***********************************************");

function myFuntion1() {
  var obj = {
    name: "lol",
    display() {
      console.log(this, "lol"); // this is obj
    },
    hello: () => {
      console.log(this, "haha"); //window
    },
  };

  console.log("myFuntion1", obj);
  console.log("myFuntion1", obj.display()); //this is obj, lol
  console.log(obj.hello()); // window, haha
}

myFuntion1();
