import React, { useState } from 'react';
import { Container, Row, Col, Card, Collapse } from 'react-bootstrap';
import '../style.css';

const Categorias = () => {
    const categorias = [
        { nombre: 'Postres', descripcion: 'Recetas dulces para cualquier ocasión.', color: '#e76f51' },
        { nombre: 'Entradas', descripcion: 'Platos ligeros para empezar la comida.', color: '#2a9d8f' },
        { nombre: 'Bebidas', descripcion: 'Refrescos y bebidas para acompañar.', color: '#264653' },
        { nombre: 'Plato Principal', descripcion: 'Recetas para el plato fuerte.', color: '#f4a261' },
        { nombre: 'Sopas', descripcion: 'Recetas de sopas nutritivas.', color: '#e9c46a' },
        { nombre: 'Ensaladas', descripcion: 'Recetas frescas y saludables.', color: '#2a9d8f' }
    ];

    const [openCategoria, setOpenCategoria] = useState(null);
    const [tutorialesPorCategoria, setTutorialesPorCategoria] = useState({});

    const handleCategoriaClick = async (categoriaNombre, index) => {
        if (openCategoria === index) {
            setOpenCategoria(null);
            return;
        }
        setOpenCategoria(index);

        if (!tutorialesPorCategoria[index]) {
            try {
                const response = await fetch(`http://localhost:3000/tutoriales?categoria=${categoriaNombre}`);
                if (response.ok) {
                    const data = await response.json();
                    setTutorialesPorCategoria(prevState => ({
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
        <Container fluid className="categorias-container">
            <h2 className="text-center my-4" style={{ color: '#e76f51', fontWeight: 'bold' }}>Categorías de Recetas</h2>
            <Row className="categorias-list">
                {categorias.map((categoria, index) => (
                    <Col md={4} className="mb-4" key={index}>
                        <Card
                            className="categorias-card"
                            style={{ backgroundColor: categoria.color, cursor: 'pointer', borderColor: categoria.color, transition: 'transform 0.3s, box-shadow 0.3s' }}
                            onClick={() => handleCategoriaClick(categoria.nombre, index)}
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
                                <Card.Title className="categorias-card-title" style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                    {categoria.nombre}
                                </Card.Title>
                                <Card.Text className="categorias-card-text" style={{ color: '#ffffff', fontSize: '1rem' }}>
                                    {categoria.descripcion}
                                </Card.Text>
                            </Card.Body>
                            <Collapse in={openCategoria === index}>
                                <div className="mt-3" style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px' }}>
                                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                                        {tutorialesPorCategoria[index] && tutorialesPorCategoria[index].length > 0 ? (
                                            tutorialesPorCategoria[index].map((tutorial, i) => (
                                                <li key={i} style={{ color: '#333', marginBottom: '10px', padding: '5px 0' }}>
                                                    <strong>{tutorial.nombre}:</strong> {tutorial.descripcion}
                                                </li>
                                            ))
                                        ) : (
                                            <li style={{ color: '#333' }}>No hay tutoriales disponibles para esta categoría.</li>
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

export default Categorias;
