/*

in a browser calling fetch will fire off a network request but it's the browser handling it, not our code.
So it's non-blocking but not by outside the execution environment.

(res) => res.json(), , (joke) => console.log(joke.setup + "\n" + joke.punchline, will be in microtask queue

*/

fetch("https://official-joke-api.appspot.com/random_joke")
  .then((res) => res.json())
  .then((joke) => console.log(joke.setup + "\n" + joke.punchline));

console.log("main foo");
