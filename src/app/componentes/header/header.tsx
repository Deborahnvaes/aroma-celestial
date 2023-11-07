import Image from 'next/image';
import React from 'react';

import './style.css'


function Header () {
    return(
        <header className='header'>
        <nav className='nav-header'>
            <ul className='nav-list'>
                <li className='nav-list-item'>Home</li>
                <li className='nav-list-item'>Contatos</li>
                <li className='nav-list-item'>Sobre</li>
            </ul>
        </nav>
        <h1>AROMA CELESTIAL</h1>
        </header>
    )
}

export default Header