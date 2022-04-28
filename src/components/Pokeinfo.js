import React from 'react'
import '../css/main.css';

const apiData ={
    apiUrl: 'https://pokeapi.co/api/v2/',
    endpoint: 'pokemon/'
  }

class Pokeinfo extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            pokeName: '',
            pokeImg: ''
        }
    }

    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon/charizard')
        .then((data) => data.json())
        .then((pokemon) => {
            this.setState({
              pokeName: pokemon.name,
              pokeImg: pokemon.sprites.front_default
            })
            console.log(pokemon.name, pokemon.sprites.front_default)
        })
        .catch((err) => {
            console.error(err);
        })
    }

    miNumero = React.createRef();
    ingresaNumero = (e) => {
        e.preventDefault();
        console.log(this.miNumero.current.value);
        if(this.miNumero.current.value > 0 && this.miNumero.current.value <= 898){
            const url = apiData.apiUrl + apiData.endpoint + this.miNumero.current.value;
            fetch(url)
                .then((data) => data.json())
                .then((pokemon) => {
                    this.setState({
                        pokeName: pokemon.name,
                        pokeImg: pokemon.sprites.front_default
                    })
                    console.log(pokemon.name, pokemon.sprites.front_default)
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
            const url = apiData.apiUrl + apiData.endpoint + this.miNombre.current.value;
            fetch(url)
                .then((data) => data.json())
                .then((pokemon) => {
                    this.setState({
                        pokeName: pokemon.name,
                        pokeImg: pokemon.sprites.front_default
                    })
                    console.log(pokemon.name, pokemon.sprites.front_default)
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
                    <p>{this.state.pokeName}</p>
                    <img src={this.state.pokeImg} />
                </div>
            </div>
        )
    }
}

export default Pokeinfo