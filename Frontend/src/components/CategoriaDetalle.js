// Categoría Detalle Component
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../style.css';

const CategoriaDetalle = () => {
    const { categoria } = useParams();
    const [tutoriales, setTutoriales] = useState([]);

    useEffect(() => {
        const fetchTutoriales = async () => {
            try {
                const response = await fetch(`/api/tutoriales?categoria=${categoria}`);
                const data = await response.json();
                setTutoriales(data);
            } catch (error) {
                console.error('Error al obtener los tutoriales:', error);
            }
        };

        fetchTutoriales();
    }, [categoria]);

    return (
        <Container fluid className="categoria-detalle-container mt-5">
            <h2 className="text-center my-4" style={{ color: '#d35400' }}>Tutoriales de {categoria}</h2>
            <Row className="tutoriales-list">
                {tutoriales.length > 0 ? (
                    tutoriales.map((tutorial, index) => (
                        <Col md={4} className="mb-4" key={index}>
                            <Card className="tutoriales-card" style={{ backgroundColor: '#fff3e0', borderColor: '#d35400' }}>
                                <Card.Img variant="top" src={tutorial.imagen} alt={tutorial.nombre} />
                                <Card.Body>
                                    <Card.Title className="tutoriales-card-title" style={{ color: '#d35400' }}>
                                        {tutorial.nombre}
                                    </Card.Title>
                                    <Card.Text className="tutoriales-card-text" style={{ color: '#5a3e36' }}>
                                        {tutorial.descripcion}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p className="text-center" style={{ color: '#5a3e36' }}>No hay tutoriales disponibles en esta categoría.</p>
                )}
            </Row>
        </Container>
    );
};

export default CategoriaDetalle;
