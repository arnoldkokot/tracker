import { useState, useEffect } from 'react';
import './Player.css';
import History from './History';
import Tier from './Tier';
import Mastery from './Mastery';

function Player(props) {

  const [entries, setEntries] = useState(null);

  useEffect(() => {
    setEntries(null);
    fetch(`/api/summoner/${props.name}`, {method: "GET"})
      .then(res => res.json())
      .then(response => {
        setEntries(response.rankedEntries);
      })
      .catch(error => console.log(error));
  }, [props.name]);


  return (
    <>
      <h1>{ props.name }</h1>
      <div className="tier-wrapper">
        { 
          entries == null ? "Fetching..." : 
          entries.map(entry => <Tier entry={ entry } key={ entry.queueType }/>) 
        }
      </div>
      <div className="mastery-wrapper">
        <Mastery/> {/* First mastery is styled wider and in the middle (best one) */}
        <Mastery/>
        <Mastery/> 
      </div>
      {/* <History/> */}
    </>
  );
}

export default Player;
