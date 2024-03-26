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
