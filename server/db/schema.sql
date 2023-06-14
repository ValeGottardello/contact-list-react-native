CREATE DATABASE contactsApp;

CREATE TABLE contacts (
    id SERIAL PRIMARY KEY, 
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    email TEXT NOT NULL,
    phone integer NOT NULL
);

-- insert into contacts (firstName, lastName, email, phone) values ('John', 'Vlues', 'john@hotmail.com', 1122223333) returning *;

-- update contacts set firstName = COALESCE('Marian', firstName), lastName = COALESCE('Bhul', lastName), email = COALESCE(null, email), phone = COALESCE(null, phone) WHERE id = 2 returning *;