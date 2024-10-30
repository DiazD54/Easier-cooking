import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import '../style.css';

const Contacto = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviado(true);
        setNombre('');
        setEmail('');
        setMensaje('');
    };

    return (
        <Container fluid className="contacto-container mt-5">
            <h2 className="text-center my-4" style={{ color: '#d35400', fontWeight: 'bold' }}>Contáctanos</h2>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="p-4" style={{ backgroundColor: '#fffaf0', borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)' }}>
                        {enviado && <Alert variant="success" className="text-center">Tu mensaje ha sido enviado con éxito. ¡Nos pondremos en contacto contigo pronto!</Alert>}
                        <Form onSubmit={handleSubmit} className="contacto-form">
                            <Form.Group controlId="formNombre" className="mb-4">
                                <Form.Label style={{ color: '#5a3e36', fontWeight: 'bold' }}>Nombre</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Ingresa tu nombre" 
                                    value={nombre} 
                                    onChange={(e) => setNombre(e.target.value)} 
                                    required 
                                    style={{ borderColor: '#d35400' }}
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-4">
                                <Form.Label style={{ color: '#5a3e36', fontWeight: 'bold' }}>Correo Electrónico</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Ingresa tu correo electrónico" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                    style={{ borderColor: '#d35400' }}
                                />
                            </Form.Group>

                            <Form.Group controlId="formMensaje" className="mb-4">
                                <Form.Label style={{ color: '#5a3e36', fontWeight: 'bold' }}>Mensaje</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={4} 
                                    placeholder="Escribe tu mensaje aquí" 
                                    value={mensaje} 
                                    onChange={(e) => setMensaje(e.target.value)} 
                                    required 
                                    style={{ borderColor: '#d35400' }}
                                />
                            </Form.Group>

                            <div className="text-center">
                                <Button type="submit" className="contacto-btn" style={{ backgroundColor: '#d35400', borderColor: '#d35400', color: '#fff', padding: '10px 20px', fontWeight: 'bold' }}>
                                    Enviar Mensaje
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contacto;
