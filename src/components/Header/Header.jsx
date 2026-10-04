import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <span className="kanji-sub">赤墨</span>
          <h1>Sekiboku Books</h1>
        </Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Catálogo</Link></li>
          <li><Link to="/carrito">Carrito</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;