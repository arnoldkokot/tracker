import express from "express";
import request from "../src/request.js";

export const router = express.Router();

router.get('/:summonerName', async (req, res) => {
  try {
    const encodedName = encodeURIComponent(req.params.summonerName);
    const { id, name } = await request(`/lol/summoner/v4/summoners/by-name/${encodedName}`);
    const rankedEntries = await request(`/lol/league/v4/entries/by-summoner/${id}`);
    res.send({
      name: name,
      rankedEntries: rankedEntries
    });
  } catch(e) {
    console.error(e);
    res.send(e);
  }
});