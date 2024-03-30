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

//async await

async function init() {
  await createPost({ title: "post three", body: "this is post three" });

  getPosts();
}

init();

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
}

fetchUsers();

console.log(
  "this will not wait create post, it will show up first before create post is done"
);
