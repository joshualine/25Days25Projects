
const posts = [
  { title: "Post one", body: "This is post one"},
  { title: "Post two", body: "This is post two"},
  { title: "Post three", body: "This is post Three"},
  { title: "Post four", body: "This is post four"},
];


function getPosts () {
  setTimeout(() => {
    posts.forEach((post) => {
      console.log(post.title)
    })
  }, 1000)
}

function createPost (post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if(!error) {
        resolve();
      } else {
        reject('Error: something went wrong');
      }
      
    }, 2000)
  })
}

async function init() {
  await createPost({ title: "Post five", body: "This is post five"})
  getPosts();
}

init();