// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1>Tutoriales de Cocina</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Categorias">Categorías</Link></li>
                    <li><Link to="/Niveles">Niveles</Link></li>
                    <li><Link to="/Perfil">Perfil</Link></li>
                    <li><Link to="/Contacto">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;