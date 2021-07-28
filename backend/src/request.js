import "dotenv/config.js";
import https from "https";

// This function always returns json object, if its rejected there will be a single key - "status"
// such key won't exist if promise is resolved sucessfully.
export default function request(path, region = "euw1") {
  return new Promise((resolve, reject) => {
    console.log(`<-- ${path}`);
    const options = {
      hostname: `${region}.api.riotgames.com`,
      method: "GET",
      path: path,
      headers: {
        "X-Riot-Token": process.env.API_KEY,
      },
    };

    https
      .request(options, response => {
        let str = "";
        response.on("data", data => (str += data));
        response.on("end", () => {
          const json = JSON.parse(str);
          if (response.statusCode == "200") resolve(json);
          else {
            console.log(JSON.stringify(response.headers));
            reject(json);
          }
        });
      })
      .end();
  });
}
