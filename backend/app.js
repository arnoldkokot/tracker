
import express from "express";
import request from "./src/request.js";

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(5000, console.log(`App live at 5000`));