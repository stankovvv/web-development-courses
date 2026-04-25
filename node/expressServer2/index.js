import express from 'express';


const app = express();
const port = 3000;
//when front user wants to get something from the server, we need to define a route for that
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1> <p>Welcome to my Express server.</p>');
});
//about request and response
app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1> <p>This is a simple Express server.</p>');
});
//contact request and response
app.get('/contact', (req, res) => {
  res.send('<h1>Contact Page</h1> <p>Please contact us for more information.</p>');
});
//server listen to the port const port = 3000; and when the server is running, it will execute the callback function and log the message to the console
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
