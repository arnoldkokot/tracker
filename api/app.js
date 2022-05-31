import express from "express";
import "dotenv/config.js";
import cors from "cors";

import { router as playerRouter } from "./routes/player.js";
import { router as listRouter } from "./routes/list.js";
import { router as matchRouter } from "./routes/match.js";

import database from "./util/database.js";

const app = express();
app.use(cors());

app.use(function (req, res, next) {
  console.log("API HIT!");
  next();
});

app.use("/api/player", playerRouter);
app.use("/api/list", listRouter);
app.use("/api/match", matchRouter);

app.get("/*", (req, res) => {
  res.status(404);
  res.send({
    status: {
      message: "Bad path",
      status_code: 404,
    },
  });
});

function boot() {
  const port = process.env.PORT;
  app.listen(port, console.log(`App live at ${port}`));
  database.connect();
}
boot();
