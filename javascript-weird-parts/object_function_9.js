// function factory, closure

function makeGreeting(language) {
  //because closure, language is still there, even when makeGreeting() is gone

  return function (firstname, lastname) {
    if (language === "en") {
      return console.log("hello " + firstname + " " + lastname);
    } else if (language === "es") {
      return console.log("halo " + firstname + " " + lastname);
    }
  };
}

var greetEnglish = makeGreeting("en");
var greetSpanish = makeGreeting("es");

greetEnglish("john", "doe");
greetSpanish("john", "doe");

//closure and callback

function sayHilater() {
  var greeting = "hi";

  setTimeout(function () {
    console.log(greeting); // this function is callback function
  }, 3000);
}

sayHilater();

function tellMeWhenDone(callback) {
  var a = 1000;
  var b = 2000;

  callback();
}

tellMeWhenDone(function () {
  console.log("i am done");
});
