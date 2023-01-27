import './App.css';
import React, { useState } from 'react';
import { Charachter } from './components/Characters';


function App() {
  const [Characters, setCharancters] = useState(null);
  const [sw, setSw] = useState(false);
  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    let data = await api.json();
    setCharancters(data.results);
    console.log(data.results);
    setSw(!sw)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick y morty</h1>
        <img src="https://raw.githubusercontent.com/ratasi/rick-morty/master/src/img/rick-morty.png" alt="Rick & morty" className="img-home" />
        <button onClick={reqApi} className="btn-search">Buscar</button>
        {sw &&

          <Charachter char={Characters} />

        }
      </header>
    </div>
  );
}

export default App;
