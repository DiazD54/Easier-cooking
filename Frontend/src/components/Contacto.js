import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import '../style.css';

const Contacto = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre && email && mensaje) {
            // Simular el envío del formulario
            setEnviado(true);
            setError(false);
            setNombre('');
            setEmail('');
            setMensaje('');
        } else {
            setError(true);
        }
    };

    return (
        <Container fluid className="contacto-container">
            <h2 className="text-center my-4" style={{ color: '#e76f51', fontWeight: 'bold' }}>Contáctanos</h2>
            <Card className="mx-auto p-4 contacto-card" style={{ maxWidth: '600px', backgroundColor: '#f4a261', borderColor: '#e76f51' }}>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        {enviado && <Alert variant="success">Tu mensaje ha sido enviado con éxito!</Alert>}
                        {error && <Alert variant="danger">Por favor, completa todos los campos.</Alert>}
                        <Form.Group controlId="formNombre" className="mb-3">
                            <Form.Label style={{ color: '#ffffff', fontWeight: 'bold' }}>Nombre</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Ingresa tu nombre" 
                                value={nombre} 
                                onChange={(e) => setNombre(e.target.value)} 
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label style={{ color: '#ffffff', fontWeight: 'bold' }}>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Ingresa tu email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </Form.Group>
                        <Form.Group controlId="formMensaje" className="mb-3">
                            <Form.Label style={{ color: '#ffffff', fontWeight: 'bold' }}>Mensaje</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={4} 
                                placeholder="Escribe tu mensaje" 
                                value={mensaje} 
                                onChange={(e) => setMensaje(e.target.value)} 
                            />
                        </Form.Group>
                        <Button 
                            variant="light" 
                            type="submit" 
                            style={{ backgroundColor: '#264653', borderColor: '#264653', color: '#ffffff', fontWeight: 'bold' }}
                        >
                            Enviar Mensaje
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Contacto;
