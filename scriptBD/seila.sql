create database clienteBD;
use clienteBD;
create table usuarios (
	id int auto_increment NOT NULL primary key,
    nome varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    telefone varchar(15) NOT NULL
);

INSERT INTO usuarios (nome, email, telefone) VALUES ('Hiago Gabriel', 'hiagogabriel1132@gmail.com', '(69) 98432-7406');