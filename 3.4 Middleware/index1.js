import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  const { street, pet } = req.body;
  res.send(`You live on ${street} and your favorite pet is ${pet}`);
  console.log(req.body);
  
});

app.get("/", (req, res) => {
  
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
