import React from 'react'
import '../css/main.css';

const Navbar = () => {
  return (
    <header>
        <span className='logo'>
            <img src='../img/pokeball.png' className='pokeball'/>
        </span>
        <div className='hamburger-menu'>
          <nav>
            <input id="toggle" type="checkbox" />
            <label class="botonBurguer" for="toggle">
              <span></span>
            </label>
            <ul className='menuLateral'>
              <li><a href='#' className='item'>Inicio</a></li>
              <li><a href='#' className='item'>Pokemon</a></li>
              <li><a href='#' className='item'>Contacto</a></li>
            </ul>
          </nav>
        </div>
    </header>
  )
}

export default Navbar