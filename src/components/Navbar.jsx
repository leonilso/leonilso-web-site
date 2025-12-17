import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones para menu mobile
import './Navbar.css';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation(); // Para saber em qual página estamos e destacar o link

  // Função para fechar o menu mobile ao clicar em um link
  const closeMenu = () => setIsMobile(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          Leonilso<span className="dot">.</span>
        </Link>
      </div>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/sobre" className={location.pathname === "/sobre" ? "active" : ""} onClick={closeMenu}>Sobre</Link>
        </li>
        <li>
          <Link to="/projetos" className={location.pathname === "/projetos" ? "active" : ""} onClick={closeMenu}>Projetos</Link>
        </li>
        <li>
          <Link to="/experiencia" className={location.pathname === "/experiencia" ? "active" : ""} onClick={closeMenu}>Experiência</Link>
        </li>
        <li>
          <Link to="/contato" className={location.pathname === "/contato" ? "active" : ""} onClick={closeMenu}>Contato</Link>
        </li>
      </ul>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;