import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

function generatePostId() {
  return posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
}

app.get('/', (req, res) => {
  res.render('index.ejs', { posts });
});

function postPubTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}
app.get('/health', (req, res) => {
  res.status(200).send('Server is running!');
});

const posts = []; // In-memory storage for posts
function addPost(title, content) {
  // Logic to add a new post to the database or in-memory storage
  const newPost = { id: generatePostId(), title, content, pubTime: postPubTime() };
  posts.push(newPost);
  console.log(`Post added: ${title} - ${content}`);
}

function deletePost(postId) {
  // Logic to delete a post from the database or in-memory storage
  const postIndex = posts.findIndex(post => post.id === postId);
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    console.log(`Post deleted: ${postId}`);
  }
}


//add post
app.post('/submit', (req, res) => {
  const { title, content } = req.body;
  addPost(title, content);
  res.redirect('/');
});
//delete post
app.delete('/delete', (req, res) => {
  const { id } = req.body;
  deletePost(id);
  res.redirect('/');
});
//edit post
app.put('/edit', (req, res) => {
  const { id, title, content } = req.body;
  const postIndex = posts.findIndex(post => post.id === parseInt(id));
  if (postIndex !== -1) {
    posts[postIndex].title = title;
    posts[postIndex].content = content;
    console.log(`Post edited: ${id} - ${title} - ${content}`);
  }
  res.redirect('/');
});
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});