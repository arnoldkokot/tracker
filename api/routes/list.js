import express from "express";

import riot from "../util/riot.js";
import validatePage from "../util/validatePage.js";

export const router = express.Router();

const MATCHES_PER_PAGE = 5;

router.get("/:puuid", async (req, res) => {
  try {
    const page = validatePage(req.query.page);
    const list = await riot(
      `match/v5/matches/by-puuid/${req.params.puuid}/ids?start=${
        page * 5
      }&count=${MATCHES_PER_PAGE}`
    );
    res.send(list);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});
