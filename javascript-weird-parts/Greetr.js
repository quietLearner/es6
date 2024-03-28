/*

name: greetr

give fn, ln, optional language, it creates greetings


usage:
g$()

*/

// (function (global, $) {
//   "use strict";

//   function Greeter(firstname, lastname, language) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.language = language;
//   }
//   Greeter.prototype.greet = function (firstname, lastname, language) {
//     switch (language.toLowerCase()) {
//       case "en":
//         return `Hello ${firstname} ${lastname}`;
//       case "es":
//         return `hola ${firstname} ${lastname}`;
//       default:
//         return `Hello ${firstname} ${lastname}`;
//     }

//     return `Hello ${firstname} ${lastname}`;
//   };

//   var g$ = new Greeter(); //create an object and give it to g$

//   return (window.g$ = g$); // this is an object
// })(window, null); //$ is jQuery

(function (global, $) {
  "use strict";

  //because closure, all the other methods still can access to them, even iife
  var supportedLangs = ["en", "es"];
  var greetings = {
    en: "Hello",
    es: "Hola",
  };

  var formalGreetings = {
    en: "Greetings",
    es: "Saludos",
  };

  var logMessages = {
    en: "Logged in",
    es: "Inicio sesion",
  };

  //Greetr is object
  var Greetr = function (firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  };

  // Every object in JavaScript has a built-in property, which is called its prototype
  Greetr.prototype = {
    fullname: function () {
      return this.firstname + " " + this.lastname;
    },
    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },
    greeting: function () {
      return greetings[this.language] + " " + this.firstname;
    },
    formalGreeting: function () {
      return formalGreetings[this.language] + " " + this.fullname();
    },
    greet: function (formal) {
      var msg;

      // if undefined or null it will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // 'this' refers to the calling object at execution time
      // makes the method chainable
      return this;
    },

    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ": " + this.fullName());
      }

      return this;
    },

    setLang: function (lang) {
      this.language = lang;

      this.validate();

      return this;
    },
  };

  //function constructor
  Greetr.init = function (firstname, lastname, language) {
    this.firstname = firstname || "Default";
    this.lastname = lastname || "Default";
    this.language = language || "en";
  };

  // why not just defined herer instead, it works too?
  // why it have to defined on  Greetr.prototype?????
  // Greetr.init.prototype = {
  //   fullname: function () {
  //     return this.firstname + " " + this.lastname;
  //   },
  //   validate: function () {
  //     if (supportedLangs.indexOf(this.language) === -1) {
  //       throw "Invalid language";
  //     }
  //   },
  //   greeting: function () {
  //     return greetings[this.language] + " " + this.firstname;
  //   },
  //   formalGreeting: function () {
  //     return formalGreetings[this.language] + " " + this.fullname();
  //   },
  //   greet: function (formal) {
  //     var msg;

  //     // if undefined or null it will be coerced to 'false'
  //     if (formal) {
  //       msg = this.formalGreeting();
  //     } else {
  //       msg = this.greeting();
  //     }

  //     if (console) {
  //       console.log(msg);
  //     }

  //     // 'this' refers to the calling object at execution time
  //     // makes the method chainable
  //     return this;
  //   },

  //   log: function () {
  //     if (console) {
  //       console.log(logMessages[this.language] + ": " + this.fullName());
  //     }

  //     return this;
  //   },

  //   setLang: function (lang) {
  //     this.language = lang;

  //     this.validate();

  //     return this;
  //   },
  // };

  console.log(
    "Greetr.init.prototype === Greetr.prototype? ",
    Greetr.init.prototype === Greetr.prototype
  ); //false

  //why? what is this doing???
  /*
     every method defined on Greetr.prototype
  
     so Greetr.init, can access them
    */
  Greetr.init.prototype = Greetr.prototype;

  return (global.Greetr = global.g$ = Greetr); // this is an object
})(window, null); //$ is jQuery

g$("chandler", "bing", "es").greet().greet(true);
