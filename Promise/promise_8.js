// Promise.resolve().then(() => console.log("foo"));

// console.log("bar");

// /* output:
// bar
// foo
// */

setTimeout(() => console.log("set timeout foo")); //3 - macrotask queue

/**
 * The .then() method of a promise takes a callback
 * and will execute it after the promise gets resolved, which also happens after the asynchronous operation finishes
 *
 * But not via the same event queue as the one setTimeout uses. There are two queues:

macrotasks queue - setTimeout places things in it, and all UI interactions are also added here.
microtasks queue - promises schedule their things here.

(r) => console.log(r) will be put on microtasks queue,
promise creation is still in the main thread


https://stackoverflow.com/questions/68233906/promise-is-blocking-the-thread
The promise executor function executes synchronously, meaning that the code inside of the function below:

new Promise(() => { // promise "executor function" that executes synchronously

});
executes when the Promise is created (the function is executed by the Promise constructor)

 */
new Promise((resolve, reject) => {
  console.log("promise creatation still in main thread");

  resolve("now I will be in the microtask queue, but i still beat set timeout");
}).then((r) => console.log(r));

//a callback given to a promise is still delayed
/*
() => console.log("promise bar") will be put on microtasks queue
*/
Promise.resolve().then(() => console.log("promise bar")); //2 - microtask queue

console.log("main baz"); //1 - current execution

/* output: 
baz
bar
foo
*/
