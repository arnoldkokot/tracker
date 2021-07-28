import "./Help.css";
import { useState } from "react";
export default function Help() {
  const [open, setOpen] = useState(false);
  if (!open)
    return (
      <span className="material-icons help" onClick={() => setOpen(!open)}>
        help_outline
      </span>
    );

  return (
    <>
      <span className="material-icons help" onClick={() => setOpen(!open)}>
        help_outline
      </span>
      <div className="help-box">
        <div className="container help-content">
          <span className="material-icons" onClick={() => setOpen(!open)}>
            close
          </span>
          <h2>What is this?</h2>
          <p>
            League tracker provides insight to League of Legends players about
            thier game performance, match history, and ranked ladder.
          </p>
          <h2>How do i use this?</h2>
          <h2>Tools used</h2>
          <ul>
            <li>React</li>
            <li>Redux toolkit</li>
            <li>Node (with Express)</li>
            <li>MongoDB Atlas</li>
            <li>Riot API</li>
          </ul>
        </div>
      </div>
    </>
  );
}
