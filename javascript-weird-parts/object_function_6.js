var arr = [
  1,
  2,
  3,
  4,
  5,
  false,
  { name: "chander" },
  function (name) {
    console.log("hello " + name);
  },
  "hello",
];

console.log(typeof arr); //object

console.log(arr);

//arguments and spread
function greet(firstname, lastname, language = "en") {
  console.log(arguments);
  console.log("firstname: ", firstname);
  console.log("lastname: ", lastname);
  console.log("language: ", language);
}

greet("a");

function getPerson() {
  return {
    firstname: "chandler",
  };
}

console.log(getPerson());

console.log();
