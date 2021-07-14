import "./App.css";
import { useState } from "react";
import Player from "./components/Player";

function App() {
  const [selected, setSelected] = useState(null);

  const names = ["James Delos", "Shibumi", "Wicked Game"];
  const namesComponents = names.map((name) => (
    <li key={name} onClick={() => setSelected(name)}>
      {name}
    </li>
  ));

  return (
    <>
      <header>
        <div className="container">
          <span className="material-icons">help_outline</span>
          <ul className="header-names">{namesComponents}</ul>
          <form className="search-box">
            <button type="submit">
              <span className="material-icons">search</span>
            </button>
            <input type="text" placeholder="Search summoner name" required />
          </form>
        </div>
      </header>
      <main>
        <div className="container">
          {selected == null ? (
            <h1>Select player</h1>
          ) : (
            <Player name={selected} />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
