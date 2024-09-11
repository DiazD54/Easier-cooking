import React from 'react';
import { Link } from 'react-router-dom';
import { tutoriales } from '../data/data';
import '../style.css';

const agruparPorNivel = (tutoriales) => {
    const agrupados = {};

    tutoriales.forEach(tutorial => {
        const { nivel } = tutorial;

        if (!agrupados[nivel]) {
            agrupados[nivel] = [];
        }

        agrupados[nivel].push(tutorial);
    });

    return agrupados;
};

const Niveles = () => {
    const tutorialesAgrupados = agruparPorNivel(tutoriales);

    return (
        <div className="niveles-page">
            <main>
                <h2>Niveles</h2>
                {Object.keys(tutorialesAgrupados).map(nivel => (
                    <section key={nivel}>
                        <h3>{nivel}</h3>
                        <Link to={`/nivel/${nivel}`}>
                            <button>Ver más</button>
                        </Link>
                    </section>
                ))}
            </main>
        </div>
    );
};

export default Niveles;