import express from "express";
import "dotenv/config.js";
import * as path from "path";
import { fileURLToPath } from "url";

//import cors from "cors";

import { router as playerRouter } from "./routes/player.js";
import { router as listRouter } from "./routes/list.js";
import { router as matchRouter } from "./routes/match.js";

import database from "./util/database.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
//app.use(cors());

// app.use(function (req, res, next) {
//   console.log("API HIT!");
//   next();
// });

app.use("/api/player", playerRouter);
app.use("/api/list", listRouter);
app.use("/api/match", matchRouter);

app.use(express.static("public"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

function boot() {
  const port = process.env.PORT;
  app.listen(port, console.log(`App live at ${port}`));
  database.connect();
}
boot();
