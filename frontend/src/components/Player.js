import { useState, useEffect } from "react";
import "./Player.css";
import Loading from "./Loading";
import Tier from "./Tier";
import Match from "./Match";
import Mastery from "./Mastery";

function Player(props) {
  const [playerData, setPlayerData] = useState({
    loading: false,
    mastery: null,
    matches: null,
    ranked: null,
  });

  useEffect(() => {
    let isMounted = true;
    setPlayerData({ loading: true });

    fetch(`/api/summoner/${props.name}`)
      .then((res) => res.json())
      .then(({ ranked, matches, mastery }) => {
        if (isMounted) {
          setPlayerData({
            loading: false,
            ranked,
            matches,
            mastery,
          });
        }
      })
      .catch((error) => console.log(error));

    return () => {
      isMounted = false;
    };
  }, [props.name]);

  const { loading, ranked, mastery, matches } = playerData;

  return (
    <>
      <h1>{props.name}</h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="stats">
            {ranked &&
              ranked.map((entry) => <Tier key={entry.queueId} {...entry} />)}
            {mastery ? <Mastery mastery={mastery} /> : ""}
          </div>
          <div className="history">
            {matches &&
              matches.map((matchId) => (
                <Match key={matchId} id={matchId} mainPlayer={props.name} />
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default Player;

/* <>
  <h1>{props.name}</h1>
  <div className="player-stats">
    <div className="tier-wrapper">
      {ranked == null
        ? "Fetching..."
        : ranked.map((entry) => (
            <Tier entry={entry} key={entry.queueType} />
          ))}
    </div>
  </div>
  <div className="mastery-wrapper">
    {masteries == null ? "Fetching...": masteries.map((mastery) => (
      <Mastery mastery={mastery} key={mastery.champion} />))}
  </div>
  {matches == null ? (
    "Fetching..."
  ) : (
    <History matchIds={matchIds} name={props.name} />
  )}
</> */
