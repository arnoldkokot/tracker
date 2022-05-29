import express from "express";
import "dotenv/config.js";
import cors from "cors";

import { router as summonerRouter } from "./routes/summoner.js";
import { router as matchRouter } from "./routes/match.js";
import database from "./src/database.js";

const app = express();
app.use(cors());

app.use("/api/summoner", summonerRouter);
app.use("/api/match", matchRouter);

function boot() {
  app.listen(process.env.PORT, console.log(`App live at ${process.env.PORT}`));
  database.connect();
}
boot();
