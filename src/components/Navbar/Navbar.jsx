import { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to='/' className='navbar-logo'>
            TennisMap
          </Link>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/players' className='nav-link'>
                Jugadores
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/tournaments' className='nav-link'>
                Torneos
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/clubs' className='nav-link'>
                Clubes
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/map' className='nav-link'>
                Mapa
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/news' className='nav-link'>
                Noticias
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link'>
                Contacto
              </Link>
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
