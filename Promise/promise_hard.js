const tick = Date.now();

const log = (v) => console.log(`${v} elapsed: ${Date.now() - tick}`);

//slow funciton
const codeBlocker = () => {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }

  return "🤷‍♂️billion loops done";
};

/*

😊sync 1 elapsed: 0
promise_hard.js:3 😊 sync 2 elapsed: 1
promise_hard.js:3 wait 2 sec, this is real async method elapsed: 2003

*/
const realAsyncMethod = () => {
  return new Promise((resolve, reject) => {
    // this is really async
    setTimeout((_) => {
      resolve("😀wait 2 sec, this is real async method");
    }, 2000);
  });
};

/*
😊sync 1 elapsed: 0
promise_hard.js:3 😊 sync 2 elapsed: 709
promise_hard.js:3 🤷‍♂️billion loops done, why this is not async elapsed: 710

why it's not in another thread

https://stackoverflow.com/questions/68233906/promise-is-blocking-the-thread
Keep in mind that Promises aren't a tool for making synchronous code asynchronous, 
they're more of a tool to help developers deal with code that already behaves asynchronously

new Promise(() => { // promise "executor function" that executes synchronously

});
executes when the Promise is created (the function is executed by the Promise constructor)

*/
const codeBlocker1 = () => {
  return new Promise((resolve, reject) => {
    // these code will run on main thread
    let i = 0;
    while (i < 1000000000) {
      i++;
    }

    //the promise is only created once your for loop completes,
    resolve("🤷‍♂️billion loops done, why this is not async💩");
  });
};

// wtf is this?why????
const nonCodeBlocker = () => {
  /*
   *1. create a promise and resolve it immediatly, so no-blocking
    2.  callback is placed on microtask queue. so it's not blocking the main thread
    (_) => {
    let i = 0;
    while (i < 1000000000) {
      if (i === 0 || i === 1000000000 - 1) {
        console.log(i);
      }
      i++;
    }

    return "🤷‍♂️billion loops done, but not blocking main thread😀";
  }
   */
  return Promise.resolve().then((_) => {
    let i = 0;
    while (i < 1000000000) {
      if (i === 0 || i === 1000000000 - 1) {
        console.log(i);
      }
      i++;
    }

    return "🤷‍♂️billion loops done, but not blocking main thread😀";
  });
};

log("😊sync 1");
//codeBlocker();
//realAsyncMethod().then(log);
//codeBlocker1().then(log);

/*

promise parameter(executor is blocking the main thread )


 */
// new Promise((resolve, reject) => {
//   let i = 0;
//   while (i < 1000000000) {
//     i++;
//   }

//   resolve("🤷‍♂️billion loops done, why this is not async💩1");
// }).then(log);

nonCodeBlocker().then(log);

log("😊 sync 2");
