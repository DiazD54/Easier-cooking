import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const CategoriaCard = ({ categoria }) => {
    return (
        <div className="categoria-card">
            <Link to={`/categoria/${categoria.nombre}`} className="categoria-link">
                <h3>{categoria.nombre.charAt(0).toUpperCase() + categoria.nombre.slice(1)}</h3>
                <p>{categoria.descripcion}</p>
            </Link>
        </div>
    );
};

export default CategoriaCard;
