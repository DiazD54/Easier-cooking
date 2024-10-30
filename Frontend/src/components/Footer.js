import React from 'react';
import '../style.css';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3" style={{ backgroundColor: '#d35400', color: '#fff', textAlign: 'center', position: 'fixed', bottom: '0', width: '100%' }}>
            <p>&copy; 2023 Tutoriales de Cocina. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
