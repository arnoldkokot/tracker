import express from "express";
import "dotenv/config.js";
import * as path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import database from "./util/database.js";
import { router as playerRouter } from "./routes/player.js";
import { router as listRouter } from "./routes/list.js";
import { router as matchRouter } from "./routes/match.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

if (process.env.ALLOW_CORS.toLowerCase() == "true") {
  console.log("CORS allowed, care.");
  app.use(cors());
}

// API REQUESTS
app.use("/api/player", playerRouter);
app.use("/api/list", listRouter);
app.use("/api/match", matchRouter);

// CLIENT CONTENT
app.use(express.static("public"));

// REACT-ROUTER SETUP
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

function boot() {
  const port = process.env.PORT;
  app.listen(port, console.log(`App live at port ${port}`));
  database.connect();
}
boot();
