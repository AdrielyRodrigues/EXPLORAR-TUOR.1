-- CREATE DATABASE ExploradorTour;
-- USE ExploradorTour;


-- CREATE TABLE Destinoss (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nome VARCHAR(100) NOT NULL,
--     pais VARCHAR(50) NOT NULL,
--     preco DECIMAL(10,2) NOT NULL
-- );


-- CREATE TABLE Turistas (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nome VARCHAR(100) NOT NULL,
--     email VARCHAR(100) UNIQUE NOT NULL,
--     senha VARCHAR(255) NOT NULL
-- );


-- CREATE TABLE Guias (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nome VARCHAR(100) NOT NULL,
--     cpf VARCHAR(14) UNIQUE NOT NULL,
--     telefone VARCHAR(15),
--     email VARCHAR(100) UNIQUE NOT NULL,
--     senha VARCHAR(255) NOT NULL
-- );


-- CREATE TABLE pacotes (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     destino VARCHAR(100) NOT NULL,
--     localizacao VARCHAR(50) NOT NULL,
--     data_inicio DATE NOT NULL,
--     data_fim DATE NOT NULL,
--     preco DECIMAL(10,2) NOT NULL,
--     imagem VARCHAR(255) NOT NULL
-- );


-- CREATE TABLE Usuarioss (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nome VARCHAR(100) NOT NULL,
--     email VARCHAR(100) UNIQUE NOT NULL,
--     senha VARCHAR(255) NOT NULL
-- );


-- CREATE TABLE Destinos (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nome VARCHAR(100) NOT NULL,
--     descricao TEXT
-- );


-- CREATE TABLE Hoteis (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nome VARCHAR(100) NOT NULL,
--     localizacao VARCHAR(100),
--     preco_diaria DECIMAL(10,2)
-- );


-- CREATE TABLE Voos (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     origem VARCHAR(100) NOT NULL,
--     destino VARCHAR(100) NOT NULL,
--     data_partida DATE NOT NULL,
--     horario TIME NOT NULL,
--     preco DECIMAL(10,2) NOT NULL
-- );


-- CREATE TABLE Reservas (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     usuarioss_id INT,
--     destino_id INT,
--     hotel_id INT,
--     voo_id INT,
--     data_reserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (usuarioss_id) REFERENCES Usuarioss(id),
--     FOREIGN KEY (destino_id) REFERENCES Destinos(id),
--     FOREIGN KEY (hotel_id) REFERENCES Hoteis(id),
--     FOREIGN KEY (voo_id) REFERENCES Voos(id)
-- );


-- CREATE TABLE Usuarios (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nome VARCHAR(100) NOT NULL,
--     email VARCHAR(100) UNIQUE NOT NULL,
--     senha VARCHAR(255) NOT NULL
-- );


-- CREATE TABLE Hoteiss (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nome VARCHAR(100) NOT NULL,
--     localizacao VARCHAR(100),
--     preco_diaria DECIMAL(10,2),
--     estrelas INT CHECK(estrelas BETWEEN 1 AND 5),
--     cafe_da_manha BOOLEAN
-- );


-- CREATE TABLE Vooss (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     origem VARCHAR(100) NOT NULL,
--     destino VARCHAR(100) NOT NULL,
--     data_partida DATE NOT NULL,
--     horario TIME NOT NULL,
--     tempo_viagem VARCHAR(20),
--     paradas INT,
--     preco DECIMAL(10,2) NOT NULL,
--     reembolsavel BOOLEAN
-- );


-- CREATE TABLE flights (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     origin VARCHAR(50) NOT NULL,
--     destination VARCHAR(50) NOT NULL,
--     departure_date DATE NOT NULL,
--     departure_time TIME NOT NULL,
--     arrival_time TIME NOT NULL,
--     flight_duration VARCHAR(10) NOT NULL,
--     class VARCHAR(20) NOT NULL
-- );


-- CREATE TABLE hotels (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     address VARCHAR(200) NOT NULL,
--     city VARCHAR(50) NOT NULL,
--     state VARCHAR(50) NOT NULL,
--     stars INT NOT NULL,
--     room_type VARCHAR(50) NOT NULL,
--     checkin_date DATE NOT NULL,
--     checkout_date DATE NOT NULL,
--     non_refundable BOOLEAN NOT NULL,
--     transfer_included BOOLEAN NOT NULL
-- );


-- CREATE TABLE packages (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     flight_id INT NOT NULL,
--     hotel_id INT NOT NULL,
--     total_price DECIMAL(10, 2) NOT NULL,
--     FOREIGN KEY (flight_id) REFERENCES flights(id),
--     FOREIGN KEY (hotel_id) REFERENCES hotels(id)
-- );


-- CREATE TABLE personal_data (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     full_name VARCHAR(100) NOT NULL,
--     birth_date DATE NOT NULL,
--     gender VARCHAR(10) NOT NULL,
--     email VARCHAR(100) NOT NULL,
--     phone VARCHAR(15) NOT NULL,
--     cpf VARCHAR(14) NOT NULL
-- );


-- CREATE TABLE pagamentos (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     payment_method ENUM('Cartão de Crédito', 'PIX', 'Boleto') NOT NULL,
--     card_number VARCHAR(200),
--     card_expiry_month INT,
--     card_expiry_year INT,
--     card_cvv VARCHAR(4),
--     card_holder_name VARCHAR(100),
--     pix_key VARCHAR(100),
--     boleto_number VARCHAR(50),
--     personal_data_id INT NOT NULL,
--     FOREIGN KEY (personal_data_id) REFERENCES personal_data(id)
-- );


-- Destinoss foi renomeada para Destinos_Oferta para indicar que trata de destinos relacionados a pacotes turísticos.
-- Usuarioss foi renomeada para Usuarios_Plataforma para diferenciar de outras possíveis tabelas de usuários.
-- Hoteiss foi renomeada para Hoteis_Extras para indicar que contém dados adicionais sobre os hotéis.
-- Vooss foi renomeada para Voos_Extras para refletir que são informações complementares sobre voos.
-- flights foi renomeada para Voos_Flights para evitar duplicação com a tabela de voos principal.
-- hotels foi renomeada para Hoteis_Detalhes para dar mais clareza sobre o conteúdo da tabela.
-- packages foi renomeada para Pacotes_Flight_Hotel para destacar que se refere a pacotes turísticos com voo e hotel inclusos.

-- nomes das tabelas: 
-- Destinos_Oferta
-- Turistas
-- Guias
-- Pacotes
-- Usuarios_Plataforma
-- Destinos
-- Hoteis
-- Voos
-- Reservas
-- Usuarios
-- Hoteis_Extras
-- Voos_Extras
-- Voos_Flights
-- Hoteis_Detalhes
-- Pacotes_Flight_Hotel
-- Dados_Pessoais
-- Pagamentos

-- Novo banco: 

CREATE DATABASE ExploradorTour;
USE ExploradorTour;


CREATE TABLE Destinos_Oferta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    pais VARCHAR(50) NOT NULL,
    preco DECIMAL(10,2) NOT NULL
);


CREATE TABLE Turistas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);


CREATE TABLE Guias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    telefone VARCHAR(15),
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);


CREATE TABLE pacotes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    destino VARCHAR(100) NOT NULL,
    localizacao VARCHAR(50) NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    imagem VARCHAR(255) NOT NULL
);


CREATE TABLE Usuarios_Plataforma (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);


CREATE TABLE Destinos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT
);


CREATE TABLE Hoteis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    localizacao VARCHAR(100),
    preco_diaria DECIMAL(10,2)
);


CREATE TABLE Voos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    origem VARCHAR(100) NOT NULL,
    destino VARCHAR(100) NOT NULL,
    data_partida DATE NOT NULL,
    horario TIME NOT NULL,
    preco DECIMAL(10,2) NOT NULL
);


CREATE TABLE Reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuarioss_id INT,
    destino_id INT,
    hotel_id INT,
    voo_id INT,
    data_reserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuarioss_id) REFERENCES Usuarioss(id),
    FOREIGN KEY (destino_id) REFERENCES Destinos(id),
    FOREIGN KEY (hotel_id) REFERENCES Hoteis(id),
    FOREIGN KEY (voo_id) REFERENCES Voos(id)
);


CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);


CREATE TABLE Hoteis_Extras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    localizacao VARCHAR(100),
    preco_diaria DECIMAL(10,2),
    estrelas INT CHECK(estrelas BETWEEN 1 AND 5),
    cafe_da_manha BOOLEAN
);


CREATE TABLE Voos_Extras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    origem VARCHAR(100) NOT NULL,
    destino VARCHAR(100) NOT NULL,
    data_partida DATE NOT NULL,
    horario TIME NOT NULL,
    tempo_viagem VARCHAR(20),
    paradas INT,
    preco DECIMAL(10,2) NOT NULL,
    reembolsavel BOOLEAN
);


CREATE TABLE Voos_Flights (
    id INT AUTO_INCREMENT PRIMARY KEY,
    origin VARCHAR(50) NOT NULL,
    destination VARCHAR(50) NOT NULL,
    departure_date DATE NOT NULL,
    departure_time TIME NOT NULL,
    arrival_time TIME NOT NULL,
    flight_duration VARCHAR(10) NOT NULL,
    class VARCHAR(20) NOT NULL
);


CREATE TABLE Hoteis_Detalhes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(200) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    stars INT NOT NULL,
    room_type VARCHAR(50) NOT NULL,
    checkin_date DATE NOT NULL,
    checkout_date DATE NOT NULL,
    non_refundable BOOLEAN NOT NULL,
    transfer_included BOOLEAN NOT NULL
);


CREATE TABLE Pacotes_Flight_Hotel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    flight_id INT NOT NULL,
    hotel_id INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (flight_id) REFERENCES flights(id),
    FOREIGN KEY (hotel_id) REFERENCES hotels(id)
);


CREATE TABLE personal_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(10) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    cpf VARCHAR(14) NOT NULL
);


CREATE TABLE pagamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    payment_method ENUM('Cartão de Crédito', 'PIX', 'Boleto') NOT NULL,
    card_number VARCHAR(200),
    card_expiry_month INT,
    card_expiry_year INT,
    card_cvv VARCHAR(4),
    card_holder_name VARCHAR(100),
    pix_key VARCHAR(100),
    boleto_number VARCHAR(50),
    personal_data_id INT NOT NULL,
    FOREIGN KEY (personal_data_id) REFERENCES personal_data(id)
);
