import { useEffect, useState } from "react";
import "./Match.css";
import Loading from "./Loading";
import { formatElapsed } from "../utils/formatElapsed";
import { getQueueById } from "../utils/getQueueById";
import { getSpellById } from "../utils/getSpellById";

export default function Match(props) {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setMatch(null);

    fetch(`/api/match/${props.id}`)
      .then(res => res.json())
      .then(({ info }) => {
        if (isMounted) {
          setMatch(info);
        }
      })
      .catch(error => console.log(error));

    return () => {
      isMounted = false;
    };
  }, [props.id]);

  const player =
    match &&
    match.participants.find(participant => {
      return participant.summonerName === props.mainPlayer;
    });

  if (!match || !player) return <Loading />;

  return (
    <div key={props.id} className="match">
      <>
        <div className={player.win ? "result win" : "result"}></div>
        <p className="match-info">
          {getQueueById(match.queueId)}
          <br />
          {formatElapsed(match.gameStartTimestamp)}
        </p>
        <div className="main-champ">
          <img
            src={`assets/champion/${player.championName}.png`}
            alt={`${player.championName}`}
          />
          <div>{player.champLevel}</div>
        </div>
        <p className="player-stats">
          {player.kills} / {player.deaths} / {player.assists}
        </p>
        <p className="kda">
          {player.deaths === 0
            ? "Perfect"
            : ((player.kills + player.assists) / player.deaths).toFixed(2) +
              ":1"}
        </p>
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
          {match.participants.map(
            ({ summonerName, uuid, championName }, index) => (
              <li key={index}>
                <img
                  src={`assets/champion/${championName}.png`}
                  alt={`${championName}`}
                />
                {summonerName}
              </li>
            )
          )}
        </ul>
        <div className="match-duration">
          {(match.gameDuration / 60000).toFixed()}min{" "}
          {((match.gameDuration % 60000) / 1000).toFixed()}s
        </div>
      </>
    </div>
  );
}
