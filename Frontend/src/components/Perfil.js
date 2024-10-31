import React, { useState } from 'react';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import '../style.css';

const Perfil = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [perfil, setPerfil] = useState({
        nombre: 'Juan Pérez',
        email: 'juan.perez@example.com',
        biografia: 'Amante de la cocina con pasión por la gastronomía internacional. Me encanta experimentar con nuevas recetas y sabores.',
        intereses: ['Postres', 'Cocina Italiana', 'Platos Saludables']
    });

    const [editData, setEditData] = useState(perfil);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
        if (isEditing) {
            setPerfil(editData);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };

    return (
        <Container fluid className="perfil-container my-5">
            <h2 className="text-center mb-4" style={{ color: '#e76f51', fontWeight: 'bold' }}>Perfil de Usuario</h2>
            <Card className="mx-auto p-4 perfil-card" style={{ maxWidth: '600px', backgroundColor: '#f4a261', borderColor: '#e76f51' }}>
                <Card.Body>
                    {isEditing ? (
                        <Form>
                            <Form.Group controlId="formNombre" className="mb-3">
                                <Form.Label style={{ color: '#ffffff', fontWeight: 'bold' }}>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    value={editData.nombre}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label style={{ color: '#ffffff', fontWeight: 'bold' }}>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={editData.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBiografia" className="mb-3">
                                <Form.Label style={{ color: '#ffffff', fontWeight: 'bold' }}>Biografía</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="biografia"
                                    rows={4}
                                    value={editData.biografia}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formIntereses" className="mb-3">
                                <Form.Label style={{ color: '#ffffff', fontWeight: 'bold' }}>Intereses</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="intereses"
                                    value={editData.intereses.join(', ')}
                                    onChange={(e) =>
                                        setEditData({
                                            ...editData,
                                            intereses: e.target.value.split(',').map((item) => item.trim())
                                        })
                                    }
                                />
                            </Form.Group>
                        </Form>
                    ) : (
                        <>
                            <Card.Title style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.5rem' }}>{perfil.nombre}</Card.Title>
                            <Card.Text style={{ color: '#ffffff' }}>
                                <strong>Email:</strong> {perfil.email}
                            </Card.Text>
                            <Card.Text style={{ color: '#ffffff' }}>
                                <strong>Biografía:</strong> {perfil.biografia}
                            </Card.Text>
                            <Card.Text style={{ color: '#ffffff' }}>
                                <strong>Intereses:</strong> {perfil.intereses.join(', ')}
                            </Card.Text>
                        </>
                    )}
                    <Button
                        variant="light"
                        className="mt-3"
                        style={{ backgroundColor: '#264653', borderColor: '#264653', color: '#ffffff', fontWeight: 'bold' }}
                        onClick={handleEditClick}
                    >
                        {isEditing ? 'Guardar Cambios' : 'Editar Perfil'}
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Perfil;
