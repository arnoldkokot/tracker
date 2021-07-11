import express from "express";
import 'dotenv/config.js';
import cors from "cors";

import { router as summonerRouter } from "./routes/summoner.js";

const app = express();
app.use(cors());

app.get('/*', (req, res, next) => {
  console.log(req.path);
  next();
});

app.use('/api/summoner', summonerRouter);

app.listen(process.env.PORT, console.log(`App live at ${process.env.PORT}`));