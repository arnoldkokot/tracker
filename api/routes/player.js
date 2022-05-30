import express from "express";
import riot from "../util/riot.js";
import validateRegion from "../util/validateRegion.js";

export const router = express.Router();

router.get("/:summonerName", async (req, res) => {
  try {
    const region = validateRegion(req.query.region);
    const encodedName = encodeURIComponent(req.params.summonerName);

    const riotIDs = await riot(
      `summoner/v4/summoners/by-name/${encodedName}`,
      region
    );

    const entries = await riot(
      `league/v4/entries/by-summoner/${riotIDs.id}`,
      region
    );

    res.send({
      region,
      ...riotIDs,
      entries,
    });
  } catch (e) {
    console.error(e);
    res.send(e);
  }
});
