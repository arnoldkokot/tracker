import express from "express";
import getChampionById from "../src/getChampionById.js";
import request from "../src/request.js";

export const router = express.Router();

router.get('/:summonerName', async (req, res) => {
  try {
    const encodedName = encodeURIComponent(req.params.summonerName);
    const { id, name, puuid } = await request(`/lol/summoner/v4/summoners/by-name/${encodedName}`);

    const [ rankedEntries, mastery, matches ] = await Promise.all([
      request(`/lol/league/v4/entries/by-summoner/${id}`),
      request(`/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`),
      request(`/lol/match/v5/matches/by-puuid/${ puuid }/ids?start=0&count=5`, 'europe')
    ]);

    mastery.forEach(legend => {
      legend.champion = getChampionById(legend.championId);
    });

    res.send({
      name,
      rankedEntries,
      mastery: mastery.slice(0, 3),
      matches
    });
  } catch(e) {
    console.error(e);
    res.send(e);
  }
});