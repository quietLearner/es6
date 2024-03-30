const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise);

/*
(response) => {
  console.log(`Received response: ${response.status}`);
}

this is promise's handler,  the function inside then()
*/

// this is bad, it's no different from the callback hell. it's the same, isn't it?
// fetchPromise.then((response) => {
//   const jsonPromise = response.json();
//   jsonPromise.then((data) => {
//     console.log(data[0].name);
//   });
// });

/*
then() itself returns a promise, which will be completed with the result of the function passed to it. 
this looks much better

here we can return the promise returned by json(), good and working
*/
// fetchPromise
//   .then((response) => response.json())
//   .then(
//     (data) => {
//       console.log(data); //return 1
//       //console.log(data[0].name);
//     },
//     (reason) => {
//       console.error(reason);
//     }
//   );

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((err) => {
    console.error(err); // it will be catched here
  });

console.log("Started request…");
