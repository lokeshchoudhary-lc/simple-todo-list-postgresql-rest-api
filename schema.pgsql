CREATE DATABASE todos;

CREATE TABLE todos(
    id Serial Primary Key,
    title varchar ,
    body varchar ,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
