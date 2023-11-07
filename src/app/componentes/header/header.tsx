import Image from 'next/image';
import React from 'react';
import './style.css'

const botoesNav = ['Home', 'Contatos', 'Sobre'];

export function Header () {
    return(
          <header className="header">
            <nav>
              <ul>
                <div className="botoes-nav">
                  {botoesNav.map((item, index) => (
                    <button key={index} className="button">
                      <li>{item}</li>
                    </button>
                  ))}
                </div>
              </ul>
            </nav>
            <div className="nome-site">AROMA CELESTIAL</div>
          </header>
        );
}