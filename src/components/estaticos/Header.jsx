import React, {useState} from "react";
import '../../styles/styleEstaticos.css';
import { Link } from "react-router-dom";
import Cart from '../Cart'
function Header({cart}) {
const [isCartOpen, setCartOpen] = useState(false)

    return (
      <header>
        <div className="header-content">
        <img src="/img/logo.png" alt="Logo" className="logo" />
        <h1>Biskra.Home</h1>
        </div>

        <nav className="nav-bar">
          <ul>
            <li><Link to='/' className="nav-bar">Inicio</Link></li>
            <li><Link to='/productos' className="nav-bar">Galería de Productos</Link></li>
            <li><Link to='/acercade' className="nav-bar">Sobre nosotros</Link></li>
            <li><Link to='/contacto' className="nav-bar">Contacto</Link></li>
            <li className='cartNav'>
              <button className='btnCart' onClick={()=>setCartOpen(true)}>
                <i className='fa-solid fa-cart-shopping'></i>
              </button>
              <Cart cartItems={cart} isOpen={isCartOpen} onClose={()=>setCartOpen(false)}/>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;
