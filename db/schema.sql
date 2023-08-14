DROP DATABASE IF EXISTS doodles_dev;
CREATE DATABASE doodles_dev;

\c doodles_dev;

CREATE TABLE doodles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist_name VARCHAR(255),
    created_date DATE,
    image_url TEXT,
    doodle_description TEXT
);