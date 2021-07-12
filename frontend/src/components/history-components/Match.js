import './Match.css';
import { useState, useEffect } from 'react';

function Match(props) {

  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    fetch(`/api/match/${props.id}`, {method: "GET"})
      .then(res => res.json())
      .then(response => {
        setMetadata(response.metadata);
      })
      .catch(error => console.log(error));
  }, [props.id]);

  return (
    <li className="match">
      {
        metadata == null ? "Fetching..." : 
        <>
          { metadata.matchId }
          {/* <div className="result"/>
          <div>
            <p>Draft Pick</p>
            <p>68 days ago</p>
          </div>
          <div className="main-legend">
            <img src="Quinn.png" alt="Quinn avatar"/>
            <div>13</div>
          </div>
          <div>3/3/5</div>
          <div>2.67:1</div> */}
        </>
      }
    </li>
  );
}

export default Match;
