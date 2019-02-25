DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers (
	id INT(11) AUTO_INCREMENT NOT NUll,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN default 0,
    primary key (id)
)