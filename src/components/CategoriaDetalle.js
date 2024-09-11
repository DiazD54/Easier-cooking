import React from 'react';
import { useParams } from 'react-router-dom';
import { tutoriales } from '../data/data';

const CategoriaDetalle = () => {
    const { categoria } = useParams();
    const tutorialesFiltrados = tutoriales.filter(tutorial => tutorial.categoria === categoria);

    return ( 
        <section>
            <h2>{categoria}</h2>
            <div className="tutoriales">
                {tutorialesFiltrados.map(tutorial => (
                    <div key={tutorial.id} className="tutorial">
                        <h5>{tutorial.nombre} - {tutorial.nivel}</h5>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoriaDetalle;