import React from "react";
import '../../styles/style.css';
import { Link } from "react-router-dom";
function Header() {
    return (
      <header>
        <div className="header-content">
        <img src="/img/logo.png" alt="Logo" className="logo" />
        <h1>Biskra.Home</h1>
        </div>

        <nav className="nav-bar">
          <ul>
            <li><Link to='/' className="nav-bar">Inicio</Link></li>
            <li><Link to='/acercade' className="nav-bar">Sobre nosotros</Link></li>
            <li><Link to='/productos' className="nav-bar">Galería de Productos</Link></li>
            <li><Link to='/contacto' className="nav-bar">Contacto</Link></li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;
