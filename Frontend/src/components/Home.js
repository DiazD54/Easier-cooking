import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../style.css';

const Home = () => {
    const tutorialesDestacados = [
        { nombre: 'Paella', descripcion: 'Aprende a hacer una paella tradicional.', imagen: 'https://example.com/paella.jpg' },
        { nombre: 'Pizza Casera', descripcion: 'Receta fácil para hacer pizza desde cero.', imagen: 'https://example.com/pizza.jpg' },
        { nombre: 'Sushi en Casa', descripcion: 'Los pasos esenciales para hacer sushi.', imagen: 'https://example.com/sushi.jpg' }
    ];

    return (
        <Container fluid className="home-container">
            <h1 className="text-center my-4" style={{ color: '#e67e22' }}>Bienvenido a Easier Cooking</h1>
            <p className="text-center mb-5" style={{ color: '#5a3e36' }}>Encuentra recetas fáciles y aprende a cocinar de una manera sencilla y divertida.</p>

            <Button className="explore-btn mb-5" href="/niveles" style={{ backgroundColor: '#d35400', borderColor: '#d35400', color: '#fff' }}>Explorar Niveles de Dificultad</Button>

            <h2 className="text-center my-4">Tutoriales Destacados</h2>
            <Row className="tutoriales-destacados">
                {tutorialesDestacados.map((tutorial, index) => (
                    <Col md={4} className="mb-4" key={index}>
                        <Card className="tutoriales-card" style={{ backgroundColor: '#fff3e0', borderColor: '#e67e22' }}>
                            <Card.Img variant="top" src={tutorial.imagen} alt={tutorial.nombre} />
                            <Card.Body>
                                <Card.Title className="tutoriales-card-title" style={{ color: '#d35400' }}>
                                    {tutorial.nombre}
                                </Card.Title>
                                <Card.Text className="tutoriales-card-text">
                                    {tutorial.descripcion}
                                </Card.Text>
                                <Button variant="primary" className="mt-3" style={{ backgroundColor: '#d35400', borderColor: '#d35400', color: '#fff' }} href="#">
                                    Ver Tutorial
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
