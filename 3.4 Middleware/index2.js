import express from "express";
import morgan from "morgan";
const app = express();
const port = 3000;
  
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello");
});

function logger(req, res, next) {
  console.log(`request:method: ${req.method}`);
  console.log(`request:url: ${req.url}`);
  next();
}

app.use(logger);

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
