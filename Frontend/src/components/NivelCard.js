import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const NivelCard = ({ nivel }) => {
    return (
        <div className="nivel-card" style={{ backgroundColor: nivel.color }}>
            <Link to={`/nivel/${nivel.nombre}`} className="nivel-link">
                <h3>{nivel.nombre.charAt(0).toUpperCase() + nivel.nombre.slice(1)}</h3>
                <p>{nivel.descripcion}</p>
            </Link>
        </div>
    );
};

export default NivelCard;
