import React from 'react';
import './Navbar.css'; // Importa el archivo CSS del Navbar
import CartWidget from './CartWidget'; // Importa el componente CartWidget

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/acerca-de">Acerca de</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      <CartWidget /> {/* Agrega el componente CartWidget */}
    </nav>
  );
}

export default Navbar;


