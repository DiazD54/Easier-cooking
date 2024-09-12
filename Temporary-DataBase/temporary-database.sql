-----Use this to create a temporary database for testing purposes.-----

CREATE TABLE IDIOMAS (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE VIDEO (
    id SERIAL PRIMARY KEY,
    link TEXT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT
);

CREATE TABLE PLATOS (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE INGREDIENTES (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE PLATOSXINGREDIENTES (
    id SERIAL PRIMARY KEY,
    cantidad_ingrediente TEXT NOT NULL,
    id_plato INTEGER REFERENCES PLATOS(id),
    id_ingrediente INTEGER REFERENCES INGREDIENTES(id)
);

CREATE TABLE USUARIO (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    notificaciones BOOLEAN NOT NULL,
    id_idioma INTEGER REFERENCES IDIOMAS(id)
);

CREATE TYPE nivel_enum AS ENUM ('básico', 'intermedio', 'avanzado');
CREATE TYPE categoria_enum AS ENUM ('postre', 'entrada', 'plato_principal', 'bebida');
ALTER TYPE categoria_enum ADD VALUE 'ensaladas';
ALTER TYPE categoria_enum ADD VALUE 'sopas';
ALTER TYPE categoria_enum ADD VALUE 'aperitivos';
ALTER TYPE categoria_enum ADD VALUE 'salsas';


CREATE TABLE TUTORIALES (
    id SERIAL PRIMARY KEY,
    id_plato INTEGER REFERENCES PLATOS(id),
    id_video INTEGER REFERENCES VIDEO(id),
    id_usuario INTEGER REFERENCES USUARIO(id),
    recomendado BOOLEAN NOT NULL,
    categoria categoria_enum,
    nivel nivel_enum,
    numero_likes INTEGER,
    descripcion TEXT,
    fecha_subida DATE NOT NULL,
    calificacion_promedio DECIMAL(3, 2) DEFAULT 0.00
);

CREATE TABLE COMENTARIOS (
    id SERIAL PRIMARY KEY,
    id_usuario INTEGER REFERENCES USUARIO(id),
    texto TEXT NOT NULL,
    calificacion INTEGER CHECK (calificacion >= 0 AND calificacion <= 5),
    id_tutorial INTEGER REFERENCES TUTORIALES(id)
);

INSERT INTO IDIOMAS (nombre) VALUES
('Español'),
('Inglés'),
('Francés'),
('Alemán'),
('Italiano'),
('Portugués'),
('Chino'),
('Japonés'),
('Ruso'),
('Árabe'),
('Hindi'),
('Coreano'),
('Holandés'),
('Sueco'),
('Turco');

INSERT INTO VIDEO (link, nombre, descripcion) VALUES
('https://example.com/video1', 'Cómo hacer una paella', 'Tutorial completo para hacer una paella tradicional.'),
('https://example.com/video2', 'Receta de pizza casera', 'Aprende a hacer pizza desde cero.'),
('https://example.com/video3', 'Ceviche peruano', 'Receta auténtica de ceviche.'),
('https://example.com/video4', 'Cómo preparar sushi', 'Los pasos esenciales para hacer sushi en casa.'),
('https://example.com/video5', 'Pastel de chocolate', 'Cómo hornear un delicioso pastel de chocolate.'),
('https://example.com/video6', 'Ensalada César', 'Receta clásica de ensalada César.'),
('https://example.com/video7', 'Tacos al pastor', 'Cómo hacer tacos al pastor con auténtico sabor mexicano.'),
('https://example.com/video8', 'Sopa de tomate', 'Receta fácil de sopa de tomate.'),
('https://example.com/video9', 'Lasagna italiana', 'Preparación tradicional de lasagna.'),
('https://example.com/video10', 'Smoothie verde', 'Receta para un smoothie saludable.'),
('https://example.com/video11', 'Pan casero', 'Cómo hacer pan en casa.'),
('https://example.com/video12', 'Galletas de avena', 'Receta para galletas de avena y pasas.'),
('https://example.com/video13', 'Salsa pesto', 'Preparación de salsa pesto.'),
('https://example.com/video14', 'Risotto de hongos', 'Cómo preparar un risotto cremoso.'),
('https://example.com/video15', 'Chiles en nogada', 'Receta tradicional de chiles en nogada.');

INSERT INTO PLATOS (nombre) VALUES
('Paella'),
('Pizza'),
('Ceviche'),
('Sushi'),
('Pastel de chocolate'),
('Ensalada César'),
('Tacos al pastor'),
('Sopa de tomate'),
('Lasagna'),
('Smoothie verde'),
('Pan casero'),
('Galletas de avena'),
('Salsa pesto'),
('Risotto de hongos'),
('Chiles en nogada');

INSERT INTO INGREDIENTES (nombre) VALUES
('Arroz'),
('Tomate'),
('Pollo'),
('Pescado'),
('Aguacate'),
('Harina'),
('Levadura'),
('Queso'),
('Aceite de oliva'),
('Limón'),
('Ajo'),
('Cebolla'),
('Carne de res'),
('Leche'),
('Azúcar');

INSERT INTO PLATOSXINGREDIENTES (cantidad_ingrediente, id_plato, id_ingrediente) VALUES
('200g', 1, 1), -- Paella con Arroz
('3 unidades', 2, 2), -- Pizza con Tomate
('150g', 3, 4), -- Ceviche con Pescado
('2 piezas', 4, 4), -- Sushi con Pescado
('100g', 5, 14), -- Pastel de chocolate con Azúcar
('50ml', 6, 9), -- Ensalada César con Aceite de oliva
('200g', 7, 13), -- Tacos al pastor con Carne de res
('2 unidades', 8, 2), -- Sopa de tomate con Tomate
('300g', 9, 3), -- Lasagna con Pollo
('1 unidad', 10, 5), -- Smoothie verde con Aguacate
('500g', 11, 6), -- Pan casero con Harina
('100g', 12, 15), -- Galletas de avena con Azúcar
('100g', 13, 10), -- Salsa pesto con Limón
('200g', 14, 12), -- Risotto de hongos con Cebolla
('100g', 15, 3); -- Chiles en nogada con Pollo

INSERT INTO USUARIO (nombre, correo, notificaciones, id_idioma) VALUES
('Juan Pérez', 'juanperez@example.com', TRUE, 1),
('Maria García', 'mariagarcia@example.com', TRUE, 2),
('Carlos López', 'carloslopez@example.com', FALSE, 3),
('Ana Rodríguez', 'anarodriguez@example.com', TRUE, 4),
('Luis Fernández', 'luisfernandez@example.com', FALSE, 5),
('Laura Martínez', 'lauramartinez@example.com', TRUE, 6),
('Jorge Sánchez', 'jorgesanchez@example.com', FALSE, 7),
('Patricia Ruiz', 'patriciaruiz@example.com', TRUE, 8),
('Miguel Gómez', 'miguelgomez@example.com', FALSE, 9),
('Carmen Díaz', 'carmendiaz@example.com', TRUE, 10),
('Pedro Morales', 'pedromorales@example.com', TRUE, 11),
('Isabel Herrera', 'isabelherrera@example.com', FALSE, 12),
('Rosa Medina', 'rosamedina@example.com', TRUE, 13),
('Sergio Vargas', 'sergiovargas@example.com', FALSE, 14),
('Andrea Torres', 'andreatorres@example.com', TRUE, 15);

INSERT INTO TUTORIALES (id_plato, id_video, id_usuario, recomendado, categoria, nivel, numero_likes, descripcion, fecha_subida, calificacion_promedio) VALUES
(1, 1, 1, TRUE, 'plato_principal', 'intermedio', 150, 'Tutorial completo de paella.', '2024-01-15', 4.5),
(2, 2, 2, FALSE, 'plato_principal', 'básico', 200, 'Receta sencilla de pizza.', '2024-02-10', 4.7),
(3, 3, 3, TRUE, 'entrada', 'avanzado', 180, 'Preparación de ceviche.', '2024-03-05', 4.8),
(4, 4, 4, TRUE, 'plato_principal', 'intermedio', 250, 'Cómo hacer sushi en casa.', '2024-04-20', 4.9),
(5, 5, 5, FALSE, 'postre', 'básico', 300, 'Delicioso pastel de chocolate.', '2024-05-25', 4.6),
(6, 6, 6, TRUE, 'ensaladas', 'intermedio', 120, 'Receta clásica de ensalada César.', '2024-06-15', 4.2),
(7, 7, 7, TRUE, 'plato_principal', 'intermedio', 270, 'Auténticos tacos al pastor.', '2024-07-10', 4.8),
(8, 8, 8, FALSE, 'sopas', 'básico', 90, 'Sopa de tomate fácil.', '2024-08-05', 4.1),
(9, 9, 9, TRUE, 'plato_principal', 'avanzado', 230, 'Lasagna italiana tradicional.', '2024-09-01', 4.9),
(10, 10, 10, FALSE, 'bebida', 'básico', 140, 'Smoothie verde saludable.', '2024-10-15', 4.4),
(11, 11, 11, TRUE, 'postre', 'intermedio', 160, 'Pan casero.', '2024-11-20', 4.3),
(12, 12, 12, FALSE, 'postre', 'básico', 110, 'Galletas de avena.', '2024-12-01', 4.0),
(13, 13, 13, TRUE, 'salsas', 'intermedio', 190, 'Salsa pesto.', '2025-01-10', 4.7),
(14, 14, 14, FALSE, 'plato_principal', 'avanzado', 220, 'Risotto de hongos.', '2025-02-05', 4.8),
(15, 15, 15, TRUE, 'plato_principal', 'intermedio', 260, 'Chiles en nogada.', '2025-03-20', 4.9);

SELECT nombre, correo
FROM USUARIO
WHERE notificaciones = TRUE;

SELECT p.nombre AS plato, i.nombre AS ingrediente
FROM PLATOS p
JOIN PLATOSXINGREDIENTES px ON p.id = px.id_plato
JOIN INGREDIENTES i ON i.id = px.id_ingrediente;

SELECT nombre, numero_likes
FROM TUTORIALES
ORDER BY numero_likes DESC;

SELECT categoria, COUNT(*) AS cantidad_tutoriales
FROM TUTORIALES
GROUP BY categoria;

----------------------------------------------------------------

SELECT nombre
FROM USUARIO
WHERE id IN (
    SELECT c.id_usuario
    FROM COMENTARIOS c
    JOIN TUTORIALES t ON c.id_tutorial = t.id
    WHERE t.calificacion_promedio > 4.5
);

SELECT id_tutorial, AVG(calificacion) AS promedio_calificacion
FROM COMENTARIOS
GROUP BY id_tutorial;

SELECT nombre,
       CASE
           WHEN notificaciones = TRUE THEN 'Activo'
           ELSE 'Inactivo'
       END AS estado_notificaciones
FROM USUARIO;

SELECT p.nombre AS plato, COUNT(t.id) AS total_tutoriales
FROM PLATOS p
JOIN TUTORIALES t ON p.id = t.id_plato
GROUP BY p.nombre
ORDER BY total_tutoriales DESC;

SELECT nombre, correo
FROM USUARIO
WHERE id_idioma = (SELECT id
                   FROM IDIOMAS
                   WHERE nombre = 'Español');

SELECT p.nombre AS plato, COUNT(t.id) AS total_tutoriales
FROM PLATOS p
JOIN TUTORIALES t ON p.id = t.id_plato
GROUP BY p.nombre
HAVING COUNT(t.id) > 5;

