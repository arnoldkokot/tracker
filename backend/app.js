import express from "express";
import 'dotenv/config.js';

import { router as summonerRouter } from "./routes/summoner.js";

const app = express();

app.use('/api/summoner', summonerRouter);


app.listen(process.env.PORT, console.log(`App live at ${process.env.PORT}`));