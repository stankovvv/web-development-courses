import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public/views'));


function addPost(title, content) {
  // Logic to add a new post to the database or in-memory storage
  console.log(`Post added: ${title} - ${content}`);
}

function deletePost(postId) {
  // Logic to delete a post from the database or in-memory storage
  console.log(`Post deleted: ${postId}`);
}



app.get('/', (req, res) => {
  res.render('index.ejs');
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

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});