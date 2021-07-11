import './App.css';
import { useState } from 'react';
import Player from './components/Player';

function App() {

  const [selected, setSelected] = useState(null);

  const names = ["James Delos", "Shibumi", "Wicked Game"];
  const namesComponents = names.map((name) =>
    <li key={name} onClick={() => setSelected(name)}>{name}</li>
  );

  return (
    <>
      <header>
        <ul className="header-names">
            { namesComponents }
        </ul>
      </header>
      <main>
        {selected == null ? <h1>Select player</h1> : <Player name={ selected } />}
      </main>
    </>
  );
}

export default App;
