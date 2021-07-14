import "./Match.css";
import { useState, useEffect } from "react";

function Match(props) {
  const [metadata, setMetadata] = useState(null);
  const [info, setInfo] = useState(null); // Info about match (info here matches riot response "info")
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    fetch(`/api/match/${props.id}`, { method: "GET" })
      .then((res) => res.json())
      .then(({ metadata, info }) => {
        setMetadata(metadata);
        setInfo(info);
        setPlayer(
          info.participants.find((player) => player.summonerName === props.name)
        );
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <li className="match" key={props.id}>
      {metadata == null || info == null || player == null ? (
        "Fetching..."
      ) : (
        <>
          <div>
            Match took {info.gameDuration}ms and was played at
            {info.gameStartTimestamp}. Game type was {info.gameType}
            {info.participants.map(({ summonerName, uuid, championName }) => (
              <div key={uuid}>
                {summonerName} played {championName}
              </div>
            ))}
            result: {player.win ? "won" : "lost"}
            {props.name} was found to play {player.championName} with stats{" "}
            {player.kills} / {player.deaths} / {player.assists}
            <div>
              {player.item0} {player.item1} {player.item2} {player.item3}{" "}
              {player.item4} {player.item5} {player.item6}
            </div>
            <div>
              {player.summoner1Id} {player.summoner2Id}
            </div>
            <div>
              {player.perks.styles[0].selections[0].perk} &{" "}
              {player.perks.styles[1].style}
            </div>
            <div>
              {player.deaths == 0
                ? "Perfect"
                : ((player.kills + player.assists) / player.deaths).toFixed(2) +
                  ":1"}
            </div>
          </div>
        </>
      )}
    </li>
  );
}

export default Match;
