CREATE DATABASE contactsApp;

CREATE TABLE contacts (
    id SERIAL PRIMARY KEY, 
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    email TEXT NOT NULL,
    phone integer NOT NULL,
);

