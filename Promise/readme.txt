
https://stackoverflow.com/questions/22539815/arent-promises-just-callbacks
promise is not callback, it's future result of an asynchronous operation



https://stackoverflow.com/questions/68233906/promise-is-blocking-the-thread
Promises aren't a tool for making synchronous code asynchronous, 
they're more of a tool to help developers deal with code that already behaves asynchronously


new Promise(() => { // promise "executor function" that executes synchronously

});
executes when the Promise is created (the function is executed by the Promise constructor)





https://stackoverflow.com/questions/65833787/please-point-out-the-misfacts-in-my-learning-regarding-asynchronous-javascript
macrotasks queue - setTimeout places things in it, and all UI interactions are also added here.
microtasks queue - promises schedule their things here.




const promise1 = new Promise((resolve, reject) => {
  //....
});


promise parameter is called executor, it's BLOCKING, not async
A function to be executed by the constructor. It receives two functions as parameters: resolveFunc and rejectFunc

this is promise execute, which is blocking
(resolve, reject) => {
  //....
}


 any value can be awaited, not just promises