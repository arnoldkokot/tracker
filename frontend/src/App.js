import "./App.css";
import Player from "./components/Player";
import { useDispatch, useSelector } from "react-redux";
import { change } from "./redux/summonerName";
import NameForm from "./components/NameForm";
import Help from "./components/Help";

function App() {
  const { summonerName } = useSelector(state => state.summonerName);
  const dispatch = useDispatch();

  const names = ["James Delos", "Wicked Game", "Arlo Black", "Sleepy Blade"];
  const namesComponents = names.map(name => (
    <li key={name} onClick={() => dispatch(change(name))}>
      {name}
    </li>
  ));

  return (
    <>
      <header>
        <div className="container">
          <Help />
          <ul className="header-names">{namesComponents}</ul>
          <NameForm />
        </div>
      </header>
      <main>
        <div className="container">
          {summonerName == null ? (
            <div className="landing-form">
              <h1>Select player or type summoner name</h1>
              <NameForm />
            </div>
          ) : (
            <Player name={summonerName} />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
