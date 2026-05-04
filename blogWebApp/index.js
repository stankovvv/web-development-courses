import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public/views'));

const posts = []; // In-memory storage for posts
function addPost(title, content) {
  // Logic to add a new post to the database or in-memory storage
  const newPost = { id: Date.now(), title, content };
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

app.get('/', (req, res) => {
  res.render('index.ejs', { posts });
});

app.post('/submit', (req, res) => {
  const { title, content } = req.body;
  addPost(title, content);
  res.redirect('/');
});

app.delete('/delete', (req, res) => {
  const { id } = req.body;
  deletePost(id);
  res.redirect('/');
});
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