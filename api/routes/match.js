import express from "express";
import request from "../util/request.js";
import database from "../util/database.js";

export const router = express.Router();

router.get("/:matchId", async (req, res) => {
  try {
    let match = await database.getMatch(req.params.matchId);
    if (match == undefined) {
      match = await request(
        `/lol/match/v5/matches/${req.params.matchId}`,
        "europe"
      );
      database.saveMatch(match);
    }
    res.send(match);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});
