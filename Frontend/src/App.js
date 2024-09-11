import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Categorias from './components/Categorias';
import CategoriaDetalle from './components/CategoriaDetalle';
import Niveles from './components/Niveles';
import NivelDetalle from './components/NivelDetalle';
import Perfil from './components/Perfil';
import Contacto from './components/Contacto';
import Layout from './components/Layout';
import './style.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/categorias" element={<Layout><Categorias /></Layout>} />
                <Route path="/categoria/:categoria" element={<Layout><CategoriaDetalle /></Layout>} />
                <Route path="/niveles" element={<Layout><Niveles /></Layout>} />
                <Route path="/nivel/:nivel" element={<Layout><NivelDetalle /></Layout>} />
                <Route path="/perfil" element={<Layout><Perfil /></Layout>} />
                <Route path="/contacto" element={<Layout><Contacto /></Layout>} />
            </Routes>
        </Router>
    );
};

export default App;