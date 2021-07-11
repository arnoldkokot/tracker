import express from "express";
import request from "../src/request.js";

export const router = express.Router();

router.get('/:summonerName', async (req, res) => {
  try {
    const encodedName = encodeURIComponent(req.params.summonerName);
    const { id, name } = await request(`/lol/summoner/v4/summoners/by-name/${encodedName}`);

    const [rankedEntries, mastery] = await Promise.all([
      request(`/lol/league/v4/entries/by-summoner/${id}`),
      request(`/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`)
    ]);

    res.send({
      name,
      rankedEntries,
      mastery: mastery.slice(0, 3)
    });
  } catch(e) {
    console.error(e);
    res.send(e);
  }
});