import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Aquí enviarás las credenciales al backend
        try {
            const response = await fetch('http://localhost:3001/aut/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                // Puedes almacenar el token en localStorage o en un contexto global
                localStorage.setItem('token', data.token);
                navigate('/'); // Redirige al home después del login exitoso
            } else {
                setErrorMessage('Credenciales incorrectas, inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setErrorMessage('Hubo un error al intentar iniciar sesión.');
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Row>
                <Col>
                    <Card style={{ padding: '30px', maxWidth: '400px', margin: 'auto' }}>
                        <Card.Body>
                            <h3 className="text-center" style={{ color: '#e76f51', fontWeight: 'bold' }}>Iniciar Sesión</h3>
                            <Form onSubmit={handleLogin}>
                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Ingresa tu email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPassword" className="mb-3">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Ingresa tu contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                                <Button
                                    type="submit"
                                    className="w-100"
                                    style={{ backgroundColor: '#e76f51', borderColor: '#e76f51', color: '#fff' }}
                                >
                                    Iniciar Sesión
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
