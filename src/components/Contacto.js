import React from 'react';
import '../style.css';

const Contacto = () => {
    return (
        <div id="root">
            <main>
                <section>
                    <h2>Contacto</h2>
                    <p>Contenido de la página de contacto.</p>
                    <div className="additional-content">
                        <h3>Información de Contacto</h3>
                        <p>Teléfono: +123 456 7890</p>
                        <p>Email: contacto@tucocina.com</p>
                        <p>Dirección: Calle Falsa 123, Ciudad, País</p>
                    </div>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje:</label>
                            <textarea id="message" name="message" required readOnly></textarea>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Contacto;