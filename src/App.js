import React from 'react';
import Navbar from './components/Navbar';
import Pokeinfo from './components/Pokeinfo';
import PokedexGeneracion from './components/PokedexGeneracion';
import './css/main.css';

class App extends React.Component{
  render(){
    return (
      <div>
        <Navbar />
        <Pokeinfo />
        <PokedexGeneracion />
      </div>
    );
  }
}

export default App;
