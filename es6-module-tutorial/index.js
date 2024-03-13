import * as combine from "./combine.js"; //combine import
//import { sayHi, sayHello } from "./greeting.js"; // static import, static export

console.log(combine.calc.sub(100, 8));

combine.sayMyNanme();


/*
  dynamic import
*/

if (true) {
  //return a promise, dyanimc import
  const { sayHi, sayHello } = await import("./greeting.js");

  sayHi();
}

const promises = Promise.all([
  await import("./greeting.js"),
  await import("./calc.js"),
]);

console.log(promises);

promises.then((result) => {
  console.log(result);
  result[0].sayHello();
  console.log(result[1].sub(200, 1));
});
