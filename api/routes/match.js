import express from "express";
import riot from "../util/riot.js";
import database from "../util/database.js";

export const router = express.Router();

router.get("/:matchId", async (req, res) => {
  try {
    let match = await database.getMatch(req.params.matchId);
    if (!match) {
      match = await riot(`match/v5/matches/${req.params.matchId}`);
      database.saveMatch(match);
    }
    res.send(match);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});
