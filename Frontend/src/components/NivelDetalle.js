import React from 'react';
import { useParams } from 'react-router-dom';
import { tutoriales } from '../data/data';

const NivelDetalle = () => {
    const { nivel } = useParams();
    const tutorialesFiltrados = tutoriales.filter(tutorial => tutorial.nivel === nivel);

    return (
        <section>
            <h2>{nivel}</h2>
            <div className="tutoriales">
                {tutorialesFiltrados.map(tutorial => (
                    <div key={tutorial.id} className="tutorial">
                        <h5>{tutorial.nombre} - {tutorial.categoria}</h5>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NivelDetalle;