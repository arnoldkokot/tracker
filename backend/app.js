import express from "express";
import request from "./src/request.js";
import 'dotenv/config.js';

const app = express();

app.get('/api/summoner/:summonerName', async (req, res) => {
  try {
    const encodedName = encodeURI(req.params.summonerName);
    const { puuid } = await request(`/lol/summoner/v4/summoners/by-name/${encodedName}`);
    res.send(puuid);
  } catch(e) {
    console.error(e);
    res.send(e);
  }
});

app.listen(process.env.PORT, console.log(`App live at ${process.env.PORT}`));