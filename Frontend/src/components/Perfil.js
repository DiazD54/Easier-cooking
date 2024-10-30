import React, { useEffect, useState } from 'react';
import '../style.css';

const Perfil = () => {
    const [perfil, setPerfil] = useState(null);

    useEffect(() => {
        const fetchPerfil = async () => {
            try {
                const response = await fetch('/api/perfil');
                const perfil = await response.json();
                setPerfil(perfil);
            } catch (error) {
                console.error('Error al obtener el perfil:', error);
            }
        };

        fetchPerfil();
    }, []);

    if (!perfil) {
        return <p>Cargando perfil...</p>;
    }

    return (
        <div className="perfil-container">
            <h2 className="text-center my-4">Perfil del Usuario</h2>
            <div className="perfil-card">
                <img src={perfil.imagen} alt="Foto del Usuario" className="perfil-imagen" />
                <div className="perfil-info">
                    <h3>{perfil.nombre}</h3>
                    <p><strong>Correo:</strong> {perfil.email}</p>
                    <p><strong>Edad:</strong> {perfil.edad}</p>
                    <p><strong>Idioma Preferido:</strong> {perfil.idioma}</p>
                    <p><strong>Notificaciones:</strong> {perfil.notificaciones ? 'Activadas' : 'Desactivadas'}</p>
                </div>
            </div>
        </div>
    );
};

export default Perfil;
