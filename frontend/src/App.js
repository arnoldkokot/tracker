import "./App.css";
import { useState } from "react";
import Player from "./components/Player";
import { useDispatch, useSelector } from "react-redux";
import { change } from "./redux/summonerName";

function App() {
  const { summonerName } = useSelector(state => state.summonerName);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const names = ["James Delos", "Wicked Game", "Arlo Black", "Sleepy Blade"];
  const namesComponents = names.map(name => (
    <li key={name} onClick={() => dispatch(change(name))}>
      {name}
    </li>
  ));

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    dispatch(change(input));
    event.preventDefault();
  }

  return (
    <>
      <header>
        <div className="container">
          <span className="material-icons">help_outline</span>
          <ul className="header-names">{namesComponents}</ul>
          <form className="search-box" onSubmit={handleSubmit}>
            <button type="submit">
              <span className="material-icons">search</span>
            </button>
            <input
              type="text"
              placeholder="Search summoner name"
              required
              value={input}
              onChange={handleChange}
            />
          </form>
        </div>
      </header>
      <main>
        <div className="container">
          {summonerName == null ? (
            <h1>Select player</h1>
          ) : (
            <Player name={summonerName} />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
