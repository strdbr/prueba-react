import React from 'react'
import '../css/main.css';

const Navbar = () => {
  return (
    <header>
        <span className='logo'>
            <img src='../img/pokeball.png' className='pokeball'/>
        </span>
        <nav>
          <ul>
            <li><a href='#'>Inicio</a></li>
            <li><a href='#'>Pokemon</a></li>
            <li><a href='#'>Contacto</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default Navbar