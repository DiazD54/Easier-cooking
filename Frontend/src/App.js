import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Categorias from './components/Categorias';
import CategoriaDetalle from './components/CategoriaDetalle';
import Niveles from './components/Niveles';
import NivelDetalle from './components/NivelDetalle';
import Perfil from './components/Perfil';
import Contacto from './components/Contacto';
import Layout from './components/Layout';
import Login from './components/Login'; // Asegúrate de importar el componente Login

const App = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/categorias" element={<Layout><Categorias /></Layout>} />
            <Route path="/niveles" element={<Layout><Niveles /></Layout>} />
            <Route path="/perfil" element={<Layout><Perfil /></Layout>} />
            <Route path="/contacto" element={<Layout><Contacto /></Layout>} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/nivel/:nivel" element={<NivelDetalle />} />
            <Route path="/categoria/:categoria" element={<CategoriaDetalle />} />
        </Routes>
        </Router>
    );
};

export default App;