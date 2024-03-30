//Promise-based functions
async function fn(print) {
  await "magic for now"; // not sure what this for?
  console.log(print);
}

fn("foo").then(() => console.log("bar"));

/* output: 
foo
bar
*/
