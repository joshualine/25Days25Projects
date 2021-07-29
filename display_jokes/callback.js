
const posts = [
  { title: "Post one", body: "This is post one"},
  { title: "Post two", body: "This is post two"},
  { title: "Post three", body: "This is post Three"},
  { title: "Post four", body: "This is post four"},
];

// function getPost () {
//   posts.forEach((post) => {
//     console.log(post.title)
//   })
// }

function getPosts () {
  setTimeout(() => {
    posts.forEach((post) => {
      console.log(post.title)
    })
  }, 1000)
}

function createPost (post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000)
}


createPost({ title: "Post five", body: "This is post five"}, getPosts)
