async function fn() {
  console.log("foo");
  await "you can await any value"; // any value can be awaited, not just promises
  console.log("bar");
}

/*

Awaiting a non-promise will still pause and resume the execution but since there is nothing to wait for, 
this will cause it to be among the first things on the microtask queue.
*/

fn();
console.log("main baz");

/* output:
foo
baz
bar
*/
