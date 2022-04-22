import "dotenv/config.js";
import https from "https";

let counter = 0;

export default function request(path, region = "euw1") {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: `${region}.api.riotgames.com`,
      method: "GET",
      path: path,
      headers: {
        "X-Riot-Token": process.env.API_KEY,
      },
    };

    counter++;
    console.log(counter);

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
