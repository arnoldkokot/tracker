import "./Match.css";
import { useState, useEffect } from "react";
import { getFormatedElapsedTime } from "../utils/getFormatedElapsedTime.js";
import { getQueueById } from "../utils/getQueueById";
import { getSpellById } from "../utils/getSpellById";

function Match(props) {
  const [metadata, setMetadata] = useState(null);
  const [info, setInfo] = useState(null); // info here matches riot response "info"

  useEffect(() => {
    let isMounted = true;
    fetch(`/api/match/${props.id}`, { method: "GET" })
      .then((res) => res.json())
      .then(({ metadata, info }) => {
        if (isMounted) {
          setMetadata(metadata);
          setInfo(info);
        }
      })
      .catch((error) => console.log(error));
    return () => {
      isMounted = false;
    };
  }, [props.id]);

  return (
    <li className="match" key={props.id}>
      {metadata == null || info == null || player == null ? (
        "Fetching..."
      ) : (
        <>
          <div className={player.win ? "result win" : "result"}></div>
          <div className="game-info">
            <p>{getQueueById(info.queueId)}</p>
            <p>{getFormatedElapsedTime(info.gameStartTimestamp)}</p>
          </div>
          <div className="main-champ">
            <img
              src={`assets/champion/${player.championName}.png`}
              alt={`${player.championName}`}
            />
            <div>{player.champLevel}</div>
          </div>
          <div className="stats">
            {player.kills} / {player.deaths} / {player.assists}
          </div>
          <div className="kda">
            {player.deaths === 0
              ? "Perfect"
              : ((player.kills + player.assists) / player.deaths).toFixed(2) +
                ":1"}
          </div>
          <div className="runes">
            <img
              src={`assets/runes/${player.perks.styles[0].selections[0].perk}.png`}
              alt={`${player.perks.styles[0].selections[0].perk}`}
            />
            <img
              src={`assets/runes/${player.perks.styles[1].style}.png`}
              alt={`${player.perks.styles[1].style}`}
            />
          </div>
          <ul className="items">
            {[
              player.item0,
              player.item1,
              player.item2,
              player.item3,
              player.item4,
              player.item5,
              player.item6,
            ].map((item, index) => (
              <li key={index}>
                <img src={`assets/item/${item}.png`} alt={`${item}`} />
              </li>
            ))}
          </ul>
          <div className="spells">
            <img
              src={`assets/spells/${getSpellById(player.summoner1Id)}.png`}
              alt={`${getSpellById(player.summoner1Id)}`}
            />
            <img
              src={`assets/spells/${getSpellById(player.summoner2Id)}.png`}
              alt={`${getSpellById(player.summoner2Id)}`}
            />
          </div>
          <ul className="participants">
            {info.participants.map(({ summonerName, uuid, championName }) => (
              <li key={uuid}>
                <img
                  src={`assets/champion/${championName}.png`}
                  alt={`${championName}`}
                />
                {summonerName}
              </li>
            ))}
          </ul>
          <div>
            {(info.gameDuration / 60000).toFixed()}min{" "}
            {((info.gameDuration % 60000) / 1000).toFixed()}s
          </div>
        </>
      )}
    </li>
  );
}

export default Match;
