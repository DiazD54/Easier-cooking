import React, { useState } from 'react';
import { Container, Row, Col, Card, Collapse } from 'react-bootstrap';
import '../style.css';

const Niveles = () => {
    const niveles = [
        { nombre: 'Basico', descripcion: 'Recetas para principiantes. Fáciles y rápidas de preparar.', color: '#2a9d8f' },
        { nombre: 'Intermedio', descripcion: 'Recetas con un nivel de dificultad moderado. Ideales para quienes tienen algo de experiencia.', color: '#e9c46a' },
        { nombre: 'Avanzado', descripcion: 'Recetas complejas para quienes quieren desafiar sus habilidades culinarias.', color: '#e76f51' }
    ];

    const [openNivel, setOpenNivel] = useState(null);
    const [tutorialesPorNivel, setTutorialesPorNivel] = useState({});

    const handleNivelClick = async (nivelNombre, index) => {
        if (openNivel === index) {
            setOpenNivel(null);
            return;
        }
        setOpenNivel(index);

        if (!tutorialesPorNivel[index]) {
            try {
                const response = await fetch(`http://localhost:3000/tutoriales?nivel=${nivelNombre}`);
                if (response.ok) {
                    const data = await response.json();
                    setTutorialesPorNivel(prevState => ({
                        ...prevState,
                        [index]: data
                    }));
                } else {
                    console.error('Error al obtener los tutoriales:', response.statusText);
                }
            } catch (error) {
                console.error('Error al obtener los tutoriales:', error);
            }
        }
    };

    return (
        <Container fluid className="niveles-container">
            <h2 className="text-center my-4" style={{ color: '#e76f51' }}>Niveles de Dificultad</h2>
            <Row className="niveles-list">
                {niveles.map((nivel, index) => (
                    <Col md={4} className="mb-4" key={index}>
                        <Card
                            className="niveles-card"
                            style={{ backgroundColor: nivel.color, cursor: 'pointer', borderColor: nivel.color, transition: 'transform 0.3s, box-shadow 0.3s' }}
                            onClick={() => handleNivelClick(nivel.nombre, index)}
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
                            <Collapse in={openNivel === index}>
                            <div className="mt-3" style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
                                <ul style={{ listStyleType: 'none', padding: 0 }}>
                                    {tutorialesPorNivel[index] && Array.isArray(tutorialesPorNivel[index]) && tutorialesPorNivel[index].length > 0 ? (
                                        tutorialesPorNivel[index].map((tutorial, i) => (
                                            <li key={i} style={{ color: '#333', marginBottom: '10px', padding: '5px 0' }}>
                                                <strong>{tutorial.nombre}:</strong> {tutorial.descripcion}
                                            </li>
                                        ))
                                    ) : (
                                        <li style={{ color: '#333' }}>No hay tutoriales disponibles para este nivel.</li>
                                    )}
                                </ul>
                            </div>

                            </Collapse>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Niveles;
