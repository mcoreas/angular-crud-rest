CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE games(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    descripcion VARCHAR(255),
    image TEXT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

