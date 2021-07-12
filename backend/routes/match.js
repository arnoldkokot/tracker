import express from "express";
import request from "../src/request.js";

export const router = express.Router();

router.get('/:matchId', async (req, res) => {
  try {
    const matchData = await request(`/lol/match/v5/matches/${req.params.matchId}`, 'europe');
    res.send(matchData);
  } catch(e) {
    console.log(e);
    res.send(e);
  }
});