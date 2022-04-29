import React from 'react'
import '../css/main.css'

class PokedexGeneracion extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    return (
        <div className='tab'>
            <h1>Pokedex por generacion.</h1>
            <div className='generaciones'>
                <button>Gen 1</button>
                <button>Gen 2</button>
                <button>Gen 3</button>
                <button>Gen 4</button>
                <button>Gen 5</button>
                <button>Gen 6</button>
                <button>Gen 7</button>
                <button>Gen 8</button>
            </div>
        </div>
      );
  }
}

export default PokedexGeneracion