import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const Niveles = () => {
    const niveles = [
        { nombre: 'Básico', descripcion: 'Recetas fáciles para principiantes.', color: '#e67e22' },
        { nombre: 'Intermedio', descripcion: 'Recetas para cocineros con algo de experiencia.', color: '#d35400' },
        { nombre: 'Avanzado', descripcion: 'Recetas desafiantes para expertos.', color: '#c0392b' }
    ];

    const navigate = useNavigate();

    const handleNivelClick = (nivelNombre) => {
        navigate(`/nivel/${nivelNombre}`);
    };

    return (
        <Container fluid className="niveles-container">
            <h2 className="text-center my-4" style={{ color: '#d35400' }}>Niveles de Dificultad</h2>
            <Row className="niveles-list">
                {niveles.map((nivel, index) => (
                    <Col md={4} className="mb-4" key={index}>
                        <Card
                            className="niveles-card"
                            style={{ backgroundColor: nivel.color, cursor: 'pointer', borderColor: nivel.color, transition: 'transform 0.3s, box-shadow 0.3s' }}
                            onClick={() => handleNivelClick(nivel.nombre)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            <Card.Body>
                                <Card.Title className="niveles-card-title" style={{ color: '#ffffff' }}>
                                    {nivel.nombre}
                                </Card.Title>
                                <Card.Text className="niveles-card-text" style={{ color: '#ffffff' }}>
                                    {nivel.descripcion}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Niveles;
