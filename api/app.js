import express from "express";
import "dotenv/config.js";
import cors from "cors";

// import { router as playerRouter } from "./routes/player.js";
// import { router as matchRouter } from "./routes/match.js";
// import database from "./src/database.js";

const app = express();
app.use(cors());

// app.use("/api/player", playerRouter);
// app.use("/api/match", matchRouter);

function boot() {
  const port = process.env.PORT;
  app.listen(port, console.log(`App live at ${port}`));
  // database.connect();
}
boot();
