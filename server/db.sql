-- Create database
CREATE DATABASE jwt;

-- Install extension
create extension if not exists "uuid-ossp";

-- SCHEMA OF USERS
CREATE TABLE users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO
    users (name, email, password)
VALUES
    ('henry', 'aldgiqwbefiqw@gmail.com', 'ildfgbiq');