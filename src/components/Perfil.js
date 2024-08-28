import React from 'react';
import '../style.css';

const Perfil = () => {
    return (
        <div>
            <main>
                <section className="perfil-section">
                    <h2>Perfil</h2>
                    <div className="perfil-detalles">
                        <h3>Detalles del Usuario</h3>
                        <p>Nombre: Juan Pérez</p>
                        <p>Email: juan.perez@example.com</p>
                    </div>
                </section>
                <section className="perfil-actividades">
                    <h3>Actividades Recientes</h3>
                    <ul>
                        <li>Receta de Paella publicada el 10/10/2023</li>
                        <li>Comentario en "Cómo hacer Tortilla" el 08/10/2023</li>
                        <li>Receta de Gazpacho actualizada el 05/10/2023</li>
                    </ul>
                </section>
                <section className="perfil-configuracion">
                    <h3>Configuración</h3>
                    <p>Preferencias de notificación: Activadas</p>
                    <p>Idioma: Español</p>
                </section>
            </main>
        </div>
    );
};

export default Perfil;