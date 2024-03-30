/*
Async JS Crash Course - Callbacks, Promises, Async Await

https://youtu.be/PoRJizFvM7s?si=vCYHKsuNtousklaU
*/

const posts = [
  {
    title: "post one",
    body: "this is post one",
  },
  {
    title: "post two",
    body: "this is post two",
  },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("error: something is wrong!");
      }
    }, 2000);
  });
}

createPost({ title: "post three", body: "this is post three" })
  .then(getPosts)
  .catch((err) => {
    alert(err);
  })
  .finally(() => {
    console.log("clean up");
  });

const promise1 = Promise.resolve("hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "good bye");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

// will show up after 3 sec,  the longest promise
Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values); //hello world, 3, good bye
});

// whichever finish first,  return?
Promise.race([promise1, promise2, promise3, promise4]).then((value) => {
  console.log(value); //hello world
});

console.log(
  "this will not wait create post, it will show up first before create post is done"
);
