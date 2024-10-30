import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NivelDetalle = () => {
    const { nivel } = useParams();
    const [tutorialesFiltrados, setTutorialesFiltrados] = useState([]);

    useEffect(() => {
        const fetchTutoriales = async () => {
            try {
                const response = await fetch(`/api/tutoriales/nivel/${nivel}`);
                const tutoriales = await response.json();
                setTutorialesFiltrados(tutoriales);
            } catch (error) {
                console.error('Error al obtener los tutoriales:', error);
            }
        };

        fetchTutoriales();
    }, [nivel]);

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