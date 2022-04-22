import express from "express";
import request from "../util/request.js";

export const router = express.Router();

router.get("/:summonerName", async (req, res) => {
  const encodedName = encodeURIComponent(req.params.summonerName);
  try {
    const playerIds = await request(
      `summoner/v4/summoners/by-name/${encodedName}`
    );

    const { id, puuid } = playerIds;

    const [ranked, mastery, matches] = await Promise.all([
      request(`league/v4/entries/by-summoner/${id}`),
      request(`champion-mastery/v4/champion-masteries/by-summoner/${id}`),
      request(
        `match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5`,
        "europe"
      ),
    ]);

    res.send({
      ...playerIds,
      ranked,
      matches,
      mastery: mastery.slice(0, 3),
    });
  } catch (e) {
    console.error(e);
    res.send(e);
  }
});
