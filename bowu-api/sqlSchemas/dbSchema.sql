CREATE DATABASE bowureviews;

CREATE TABLE arcadesticks
(
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    mfg VARCHAR,
    parts VARCHAR,
    platform TEXT,
    purchaselink VARCHAR,
    pictures VARCHAR
);


CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    username VARCHAR,
    email VARCHAR,
    password VARCHAR

);

CREATE TABLE stickreviews
(
    id SERIAL PRIMARY KEY,
    reviewerID INT REFERENCES users (id),
    stars INT CHECK (stars <= 6),
    revtitle VARCHAR,
    review VARCHAR,
    stickid INT REFERENCES arcadesticks (id)

);