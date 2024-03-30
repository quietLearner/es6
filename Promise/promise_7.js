async function fn(print) {
  await "magic for now";
  console.log(print);
}

fn("foo");
console.log("bar");

/* output: 
bar
foo
*/
