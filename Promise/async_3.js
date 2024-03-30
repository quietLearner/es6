/*
Async functions always return a promise. If the return value of an async function is not explicitly a promise, 
it will be implicitly wrapped in a promise
*/

async function foo() {
  return 1;
}

/*
function foo() {
  return Promise.resolve(1);
}
*/

async function bar() {}

const p = bar(); // return a promise
p.then((_) => console.log("after main thread"));

console.log("main thread ");
