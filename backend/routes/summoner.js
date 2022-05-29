import express from "express";
import championName from "../src/championName.js";
import request from "../src/request.js";

export const router = express.Router();

let knownNames = [];

router.get("/:summonerName", async (req, res) => {
  try {
    //Check for cashed summoner ids, to try to skip identification request
    let summonerData = knownNames.find(summoner => {
      return summoner.name === req.params.summonerName;
    });

    //If not cashed request from riot and save for later
    if (!summonerData) {
      const encodedName = encodeURIComponent(req.params.summonerName);
      summonerData = await request(
        `/lol/summoner/v4/summoners/by-name/${encodedName}`
      );
      summonerData.savedAt = Date.now();
      knownNames.push(summonerData);
    }

    const { id, puuid } = summonerData;

    const [ranked, mastery, matches] = await Promise.all([
      request(`/lol/league/v4/entries/by-summoner/${id}`),
      request(`/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`),
      request(
        `/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5`,
        "europe"
      ),
    ]);

    mastery.forEach(element => {
      element.championName = championName(element.championId);
    });

    res.send({
      ranked,
      matches,
      mastery: mastery.slice(0, 3),
    });

    //Cleanup old cashed names to prevent allocating too much memory
    knownNames = knownNames.filter(cashedName => {
      return Date.now() - cashedName.savedAt < 360000 * 3; // names expire in 3h
    });
  } catch (e) {
    console.error(e);
    res.send(e);
  }
});
