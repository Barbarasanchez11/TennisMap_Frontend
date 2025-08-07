import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-brand'>
          <a href='/' className='navbar-logo'>
            TennisMap
          </a>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a href='/' className='nav-link'>
                Inicio
              </a>
            </li>
            <li className='nav-item'>
              <a href='/jugadores' className='nav-link'>
                Jugadores
              </a>
            </li>
            <li className='nav-item'>
              <a href='/torneos' className='nav-link'>
                Torneos
              </a>
            </li>
            <li className='nav-item'>
              <a href='/clubes' className='nav-link'>
                Clubes
              </a>
            </li>
            <li className='nav-item'>
              <a href='/mapa' className='nav-link'>
                Mapa
              </a>
            </li>
            <li className='nav-item'>
              <a href='/noticias' className='nav-link'>
                Noticias
              </a>
            </li>
            <li className='nav-item'>
              <a href='/contacto' className='nav-link'>
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className='navbar-toggle' onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
}
