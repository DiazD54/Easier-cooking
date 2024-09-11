import React from 'react';
import { Link } from 'react-router-dom';
import { tutoriales } from '../data/data';
import '../style.css';

const agruparPorCategoria = (tutoriales) => {
    const agrupados = {};

    tutoriales.forEach(tutorial => {
        const { categoria } = tutorial;

        if (!agrupados[categoria]) {
            agrupados[categoria] = [];
        }

        agrupados[categoria].push(tutorial);
    });

    return agrupados;
};

const Categorias = () => {
    const tutorialesAgrupados = agruparPorCategoria(tutoriales);

    return (
        <div className="categorias-page">
            <main>
                <h2>Categorías</h2>
                {Object.keys(tutorialesAgrupados).map(categoria => (
                    <section key={categoria} className="categoria-section">
                        <h3>{categoria}</h3>
                        <Link to={`/categoria/${categoria}`}>
                            <button className="ver-mas-button">Ver más</button>
                        </Link>
                    </section>
                ))}
            </main>
        </div>
    );
};

export default Categorias;