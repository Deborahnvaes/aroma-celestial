import Image from 'next/image';
import React from 'react';

import './style.css'


function Header () {
    return(
        <header className='header'>
        <nav>
            <ul className='nav-list'>
                <li className='nav-list-item'>Home</li>
                <li className='nav-list-item'>Contatos</li>
                <li className='nav-list-item'>Sobre</li>
            </ul>
        </nav>
        </header>
    )
}

export default Header