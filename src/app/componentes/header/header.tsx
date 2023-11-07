import React from 'react';

import './style.css'


function Header () {
    return(
        <header className='header'>
        <nav className='nav-header'>
            <ul className='nav-list'>
                <li className='nav-list-item'><a href='#'>Home</a></li>
                <li className='nav-list-item'><a href='#'>Contatos</a></li>
                <li className='nav-list-item'><a href='#'>Sobre</a></li>
            </ul>
        </nav>
        <h1>AROMA CELESTIAL</h1>
        </header>
    )
}

export default Header