import React from 'react';
import '../style.css';

const Home = () => {
    return (
        <div>
            <main>
                <section className="welcome">
                    <h2>Bienvenido a Tutoriales de Cocina</h2>
                    <p>Descubre recetas deliciosas y aprende a cocinar como un profesional.</p>
                </section>
                <section className="featured-tutorials">
                    <h2>Tutoriales Destacados</h2>
                    <div className="tutorials">
                        <article className="tutorial">
                            <h3>Receta de Pasta</h3>
                            <p>Aprende a hacer una deliciosa pasta desde cero.</p>
                        </article>
                        <article className="tutorial">
                            <h3>Pan Casero</h3>
                            <p>Descubre los secretos para hacer pan casero perfecto.</p>
                        </article>
                        <article className="tutorial">
                            <h3>Postres Rápidos</h3>
                            <p>Recetas de postres que puedes hacer en menos de 30 minutos.</p>
                        </article>
                    </div>
                </section>
                <section className="recommended-tutorials">
                    <h2>Tutoriales Recomendados de la Semana</h2>
                    <div className="videos">
                        <article className="video">
                            <div className="video-placeholder">Video Placeholder 1</div>
                            <h3>Video Tutorial 1</h3>
                            <p>Descripción breve del video tutorial 1.</p>
                        </article>
                        <article className="video">
                            <div className="video-placeholder">Video Placeholder 2</div>
                            <h3>Video Tutorial 2</h3>
                            <p>Descripción breve del video tutorial 2.</p>
                        </article>
                        <article className="video">
                            <div className="video-placeholder">Video Placeholder 3</div>
                            <h3>Video Tutorial 3</h3>
                            <p>Descripción breve del video tutorial 3.</p>
                        </article>
                        <article className="video">
                            <div className="video-placeholder">Video Placeholder 4</div>
                            <h3>Video Tutorial 4</h3>
                            <p>Descripción breve del video tutorial 4.</p>
                        </article>
                        <article className="video">
                            <div className="video-placeholder">Video Placeholder 5</div>
                            <h3>Video Tutorial 5</h3>
                            <p>Descripción breve del video tutorial 5.</p>
                        </article>
                        <article className="video">
                            <div className="video-placeholder">Video Placeholder 6</div>
                            <h3>Video Tutorial 6</h3>
                            <p>Descripción breve del video tutorial 6.</p>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;