import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../style.css';

const Categorias = () => {
    const categorias = [
        { nombre: 'Postres', descripcion: 'Recetas dulces para cualquier ocasión.', color: '#f39c12' },
        { nombre: 'Entradas', descripcion: 'Platos ligeros para empezar la comida.', color: '#27ae60' },
        { nombre: 'Bebidas', descripcion: 'Refrescos y bebidas para acompañar.', color: '#2980b9' },
        { nombre: 'Plato Principal', descripcion: 'Recetas para el plato fuerte.', color: '#c0392b' },
        { nombre: 'Sopas', descripcion: 'Recetas de sopas nutritivas.', color: '#8e44ad' },
        { nombre: 'Ensaladas', descripcion: 'Recetas frescas y saludables.', color: '#16a085' }
    ];

    const navigate = useNavigate();

    const handleCategoriaClick = (categoriaNombre) => {
        navigate(`/categoria/${categoriaNombre}/tutoriales`);
    };

    return (
        <Container fluid className="categorias-container">
            <h2 className="text-center my-4" style={{ color: '#d35400' }}>Categorías de Recetas</h2>
            <Row className="categorias-list">
                {categorias.map((categoria, index) => (
                    <Col md={4} className="mb-4" key={index}>
                        <Card
                            className="categorias-card"
                            style={{ backgroundColor: categoria.color, cursor: 'pointer', borderColor: categoria.color, transition: 'transform 0.3s, box-shadow 0.3s' }}
                            onClick={() => handleCategoriaClick(categoria.nombre)}
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
                                <Card.Title className="categorias-card-title" style={{ color: '#ffffff' }}>
                                    {categoria.nombre}
                                </Card.Title>
                                <Card.Text className="categorias-card-text" style={{ color: '#ffffff' }}>
                                    {categoria.descripcion}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

const CategoriaTutoriales = () => {
    const { categoriaNombre } = useParams();
    const [tutoriales, setTutoriales] = useState([]);

    useEffect(() => {
        const fetchTutoriales = async () => {
            try {
                const response = await fetch(`/api/tutoriales?categoria=${categoriaNombre}`);
                const data = await response.json();
                setTutoriales(data);
            } catch (error) {
                console.error('Error al obtener los tutoriales:', error);
            }
        };
        fetchTutoriales();
    }, [categoriaNombre]);

    return (
        <Container fluid className="tutoriales-container">
            <h2 className="text-center my-4" style={{ color: '#d35400' }}>Tutoriales de {categoriaNombre}</h2>
            <Row className="tutoriales-list">
                {tutoriales.map((tutorial, index) => (
                    <Col md={4} className="mb-4" key={index}>
                        <Card className="tutorial-card">
                            <Card.Img variant="top" src={tutorial.imagen} alt={tutorial.nombre} />
                            <Card.Body>
                                <Card.Title>{tutorial.nombre}</Card.Title>
                                <Card.Text>{tutorial.descripcion}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Categorias;
export { CategoriaTutoriales };
