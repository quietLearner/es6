/*
an async function without an await expression will run synchronously

If there is an await expression inside the function body, however, the async function will always complete asynchronously.??

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
*/
async function foo() {
  console.log("foo start");
  await 1;
  console.log("foo end");
}

const p = foo();
p.then((_) => console.log("call back of foo ", _));

console.log("main thread");

/**
 * 
foo start
main thread
foo end
call back of foo  undefined
 * 
 * 
 */
