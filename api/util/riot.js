import "dotenv/config.js";
import https from "https";

/**
 * Example riot requests
 * EUNE Deithy
 * id: T3Gc5ODgrDkdtWgM3IyliG4gofu0zvfbqURPVdUWnDRQk6o
 * puuid:
 * IIGs9Z6DkdquAx6wqpkyd6oD-W3EiQXpIgmSbI5N9O-Kbf3iDWW_Dh1tq0VEt-3WWcG_-Wsio8KrIw
 *
 * Get summoner IDs
 * https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Deithy
 * https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Shibumi
 *
 * Get ranked entries
 * https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/{id}
 * https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/{id}
 *
 * Get matches list
 * https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids?start=0&count=20
 *
 * Get match
 * https://europe.api.riotgames.com/lol/match/v5/matches/{matchID}
 *
 */

export default function riot(path, region = "europe") {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: `${region}.api.riotgames.com`,
      method: "GET",
      path: "/lol/" + path,
      headers: {
        "X-Riot-Token": process.env.API_KEY,
      },
    };

    https
      .request(options, (response) => {
        let str = "";
        response.on("data", (data) => (str += data));
        response.on("end", () => {
          const json = JSON.parse(str);
          if (response.statusCode == "200") resolve(json);
          else {
            reject(json);
          }
        });
      })
      .end();
  });
}
