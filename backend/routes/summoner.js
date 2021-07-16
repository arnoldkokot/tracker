import express from "express";
import request from "../src/request.js";

export const router = express.Router();

router.get("/:summonerName", async (req, res) => {
  try {
    const encodedName = encodeURIComponent(req.params.summonerName);
    const { id, puuid } = await request(
      `/lol/summoner/v4/summoners/by-name/${encodedName}`
    );

    const [ranked, matches] = await Promise.all([
      request(`/lol/league/v4/entries/by-summoner/${id}`),
      request(
        `/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5`,
        "europe"
      ),
    ]);

    res.send({
      ranked,
      matches,
    });
  } catch (e) {
    console.error(e);
    res.send(e);
  }
});
