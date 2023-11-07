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
                    <li key={index} >
                      <button className="button">{item}</button>
                    </li>
                  ))}
                </div>
              </ul>
            </nav>
            <div className="nome-site">AROMA CELESTIAL</div>
          </header>
        );
}