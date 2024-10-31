import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const Home = () => {
    const navigate = useNavigate();

    const tutorialesDestacados = [
        { nombre: 'Paella', descripcion: 'Aprende a hacer una paella tradicional.', imagen: 'https://example.com/paella.jpg' },
        { nombre: 'Pizza Casera', descripcion: 'Receta fácil para hacer pizza desde cero.', imagen: 'https://example.com/pizza.jpg' },
        { nombre: 'Sushi en Casa', descripcion: 'Los pasos esenciales para hacer sushi.', imagen: 'https://example.com/sushi.jpg' }
    ];

    return (
        <Container fluid className="home-container">
            <section className="welcome-section text-center my-5">
                <h1 style={{ color: '#e76f51', fontWeight: 'bold', fontSize: '3rem' }}>Bienvenido a Easier Cooking</h1>
                <p style={{ color: '#264653', fontSize: '1.2rem' }}>Encuentra recetas fáciles y aprende a cocinar de una manera sencilla y divertida.</p>
                <Button className="explore-btn my-4" href="/niveles" style={{ backgroundColor: '#d35400', borderColor: '#d35400', color: '#fff', padding: '15px 30px', fontSize: '1.2rem' }}>Explorar Niveles de Dificultad</Button>
            </section>

            <section className="categories-section my-5">
                <h2 className="text-center" style={{ color: '#f4a261', fontWeight: 'bold' }}>Categorías Populares</h2>
                <Row className="mt-4">
                    {['Postres', 'Entradas', 'Bebidas', 'Plato Principal', 'Sopas', 'Ensaladas'].map((categoria, index) => (
                        <Col md={4} className="mb-4" key={index}>
                            <Card className="category-card" style={{ backgroundColor: '#e9c46a', cursor: 'pointer', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                                <Card.Body className="text-center">
                                    <Card.Title style={{ color: '#264653', fontWeight: 'bold', fontSize: '1.5rem' }}>{categoria}</Card.Title>
                                    <Card.Text style={{ color: '#264653' }}>
                                        Descubre recetas deliciosas para {categoria.toLowerCase()} y sorprende a todos con tus habilidades culinarias.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="featured-recipes-section my-5">
                <h2 className="text-center" style={{ color: '#2a9d8f', fontWeight: 'bold' }}>Recetas Destacadas</h2>
                <Row className="mt-4">
                    {tutorialesDestacados.map((receta, index) => (
                        <Col md={4} className="mb-4" key={index}>
                            <Card className="recipe-card" style={{ backgroundColor: '#fffaf0', borderColor: '#e76f51', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                                <Card.Img variant="top" src={receta.imagen} alt={receta.nombre} />
                                <Card.Body>
                                    <Card.Title style={{ color: '#d35400', fontWeight: 'bold', fontSize: '1.5rem' }}>{receta.nombre}</Card.Title>
                                    <Card.Text style={{ color: '#264653' }}>{receta.descripcion}</Card.Text>
                                    <Button variant="primary" style={{ backgroundColor: '#d35400', borderColor: '#d35400', color: '#fff' }}>Ver Receta</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="testimonials-section my-5">
                <h2 className="text-center" style={{ color: '#e76f51', fontWeight: 'bold' }}>Testimonios</h2>
                <Row className="mt-4">
                    {[{
                        nombre: 'Juan Pérez',
                        testimonio: 'Easier Cooking me ha ayudado a mejorar mis habilidades culinarias. ¡Las recetas son fáciles de seguir y deliciosas!'
                    }, {
                        nombre: 'María Gómez',
                        testimonio: 'Gracias a Easier Cooking, ahora puedo cocinar platos complejos de manera sencilla y con confianza.'
                    }, {
                        nombre: 'Carlos López',
                        testimonio: 'Me encanta cómo las recetas están organizadas por niveles de dificultad. ¡He aprendido mucho!'
                    }].map((testimonio, index) => (
                        <Col md={4} className="mb-4" key={index}>
                            <Card className="testimonial-card" style={{ backgroundColor: '#fffaf0', borderColor: '#f4a261', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                                <Card.Body>
                                    <Card.Text style={{ color: '#264653', fontStyle: 'italic' }}>
                                        &quot;{testimonio.testimonio}&quot;
                                    </Card.Text>
                                    <Card.Footer style={{ backgroundColor: 'transparent', borderColor: 'transparent', textAlign: 'right', color: '#e76f51' }}>
                                        - {testimonio.nombre}
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="newsletter-section my-5 text-center">
                <h2 style={{ color: '#2a9d8f', fontWeight: 'bold' }}>Suscríbete a Nuestro Boletín</h2>
                <p style={{ color: '#264653' }}>Recibe recetas, consejos y mucho más directamente en tu correo.</p>
                <Form className="d-inline-block mt-4" style={{ maxWidth: '500px' }}>
                    <Form.Group controlId="formNewsletter">
                        <Form.Control type="email" placeholder="Ingresa tu correo electrónico" style={{ padding: '15px', borderRadius: '50px', marginBottom: '10px' }} />
                        <Button type="submit" style={{ backgroundColor: '#d35400', borderColor: '#d35400', color: '#fff', padding: '10px 30px', borderRadius: '50px' }}>Suscribirme</Button>
                    </Form.Group>
                </Form>
            </section>

            <section className="about-section my-5 text-center">
                <h2 style={{ color: '#2a9d8f', fontWeight: 'bold' }}>Sobre Nosotros</h2>
                <p style={{ color: '#264653', maxWidth: '800px', margin: '0 auto' }}>
                    En Easier Cooking, nos apasiona compartir recetas y ayudar a todos a disfrutar del arte de la cocina. Desde platos simples hasta creaciones complejas, queremos que aprendas y disfrutes cada paso del camino culinario.
                </p>
            </section>

            <section className="contact-section my-5 text-center">
                <h2 style={{ color: '#e76f51', fontWeight: 'bold' }}>Contacto</h2>
                <p style={{ color: '#264653', maxWidth: '800px', margin: '0 auto' }}>
                    ¿Tienes alguna pregunta o sugerencia? ¡Nos encantaría saber de ti! Ponte en contacto con nosotros y compartamos el amor por la cocina.
                </p>
                <Button variant="outline-primary" style={{ color: '#e76f51', borderColor: '#e76f51', marginTop: '20px', padding: '10px 30px' }} onClick={() => navigate('/contacto')}>Contáctanos</Button>
            </section>
        </Container>
    );
};

export default Home;
