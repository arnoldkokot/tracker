import { useState, useEffect } from "react";
import "./Player.css";
import History from "./History";
import Tier from "./Tier";
import Mastery from "./Mastery";

function Player(props) {
  const [entries, setEntries] = useState(null);
  const [masteries, setMasteries] = useState(null);
  const [matchIds, setMatchIds] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setEntries(null);
    setMasteries(null);
    setMatchIds(null);
    fetch(`/api/summoner/${props.name}`, { method: "GET" })
      .then((res) => res.json())
      .then((response) => {
        if (isMounted) {
          setEntries(response.rankedEntries);
          setMasteries(response.mastery);
          setMatchIds(response.matches);
        }
      })
      .catch((error) => console.log(error));
    return () => {
      isMounted = false;
    };
  }, [props.name]);

  return (
    <>
      <h1>{props.name}</h1>
      <div className="player-stats">
        <div className="tier-wrapper">
          {entries == null
            ? "Fetching..."
            : entries.map((entry) => (
                <Tier entry={entry} key={entry.queueType} />
              ))}
        </div>
        <div className="mastery-wrapper">
          {masteries == null
            ? "Fetching..."
            : masteries.map((mastery) => (
                <Mastery mastery={mastery} key={mastery.champion} />
              ))}
        </div>
      </div>
      {matchIds == null ? (
        "Fetching..."
      ) : (
        <History matchIds={matchIds} name={props.name} />
      )}
    </>
  );
}

export default Player;
