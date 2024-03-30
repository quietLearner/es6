/*
https://stackoverflow.com/questions/65833787/please-point-out-the-misfacts-in-my-learning-regarding-asynchronous-javascript

macrotasks queue - setTimeout places things in it, and all UI interactions are also added here.

microtasks queue - promises schedule their things here.

*/

//callback based functions
setTimeout(() => console.log("foo"), 0);

console.log("bar");

/* output: 
bar
foo

1. setTimeout schedules the callback.
2. console.log("bar") runs.
3. The callback with console.log("foo") runs.


*/
