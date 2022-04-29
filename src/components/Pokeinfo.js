import React from 'react'
import '../css/main.css'
import upperCase from '../functions/upperCase'
import typesImg from '../functions/typesImg'
import colorBackground from '../functions/colorBackground'

const apiData ={
    apiUrl: 'https://pokeapi.co/api/v2/',
    endpoint: 'pokemon/'
  }

class Pokeinfo extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            pokeName: '',
            pokeImg: '',
            pokeNum: '',
            pokeType1: '',
            pokeType2: '',
            pokeWeight: ''
        }
    }

    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon/' + Math.round(Math.random() * (898 - 1) + 1))
        .then((data) => data.json())
        .then((pokemon) => {
            this.setState({
              pokeName: pokemon.name,
              pokeImg: pokemon.sprites.front_default,
              pokeNum: pokemon.id,
              pokeType1: pokemon.types[0].type.name,
              pokeWeight: pokemon.weight
            })
            if(pokemon.types[1] != null){
                this.setState({
                    pokeType2: pokemon.types[1].type.name,
                })
            }
        })
        .catch((err) => {
            console.error(err);
        })
    }

    miNumero = React.createRef();
    ingresaNumero = (e) => {
        e.preventDefault();
        if(this.miNumero.current.value > 0 && this.miNumero.current.value <= 898){
            const url = apiData.apiUrl + apiData.endpoint + this.miNumero.current.value;
            fetch(url)
                .then((data) => data.json())
                .then((pokemon) => {
                    this.setState({
                        pokeName: pokemon.name,
                        pokeImg: pokemon.sprites.front_default,
                        pokeNum: pokemon.id,
                        pokeType1: pokemon.types[0].type.name
                      })
                      if(pokemon.types[1] != null){
                          this.setState({
                              pokeType2: pokemon.types[1].type.name,
                          })
                      } else{
                        this.setState({
                            pokeType2: '',
                        })
                      }
                  })
                .catch((err) => {
                    console.error(err);
                })
        } 
        else {
        alert('Error, ese Pokemon no existe');
        }
    }

    miNombre = React.createRef();
    regx = new RegExp("^([^0-9]*)$");
    ingresaNombre = (e) => {
        e.preventDefault();
        
        console.log(this.miNombre.current.value);
        console.log(this.regx.test(this.miNombre.current.value));
        if (this.regx.test(this.miNombre.current.value) == true){
            const url = apiData.apiUrl + apiData.endpoint + this.miNombre.current.value.toLowerCase();
            fetch(url)
                .then((data) => data.json())
                .then((pokemon) => {
                    this.setState({
                        pokeName: pokemon.name,
                        pokeImg: pokemon.sprites.front_default,
                        pokeNum: pokemon.id,
                        pokeType1: pokemon.types[0].type.name
                      })
                      if(pokemon.types[1] != null){
                          this.setState({
                              pokeType2: pokemon.types[1].type.name,
                          })
                      } else{
                        this.setState({
                            pokeType2: '',
                        })
                      }
                  })
                .catch((err) => {
                    console.error(err);
                    alert('Error, ese Pokemon no existe');
                })
            }
        else {
            alert('Este campo solo acepta texto sin numeros');
        }
    }

    render (){
        return(
            <div className='flexbox'>
                <div>
                    <div className='pokeSearch'>
                        <h1>¡Ingresa un Pokemon!</h1>
                        <form onSubmit={this.ingresaNumero}>
                            <h2>Busca a un Pokemon por numero</h2>
                            <input type='number' ref={this.miNumero} placeholder=''></input>
                            <button type='submit'>Enviar</button>
                        </form>
                        <form onSubmit={this.ingresaNombre}>
                            <h2>Busca a un Pokemon por nombre</h2>
                            <input type='text' ref={this.miNombre} placeholder=''></input>
                            <button type='submit'>Enviar</button>
                        </form>
                    </div>
                </div>
                <div className='pokeinfo'>
                    <div className='pokeImg'>
                        <img src={this.state.pokeImg} className='sprite' style={colorBackground(this.state.pokeType1)}/>
                    </div>
                    <div className='pokeData'>
                        <div className='pokeName'>
                            <h1>{upperCase(this.state.pokeName)} | #{this.state.pokeNum}</h1>
                        </div>
                        <div className='types'>
                            <span>{typesImg(this.state.pokeType1)}</span>
                            <span>{typesImg(this.state.pokeType2)}</span>
                            <span> | <b>Weight: {this.state.pokeWeight}</b></span>
                        </div>
                    </div>
                </div>
                <a href='#' className='botonFlotante'>
                    <img src={this.state.pokeImg} className='botonSimbolo'/>
                </a>
            </div>
        )
    }
}

export default Pokeinfo