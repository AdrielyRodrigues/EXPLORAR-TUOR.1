create database explorartuor;

use explorartuor; 
 
 
 
 create table turistas(
	cpf varchar (20) primary key, 
    telefone varchar (11) not null,
    usuário varchar (100) not null,
    email varchar (20) not null,
    senha varchar (8) not null
 );



create table voo(
	codigoDoVooIda varchar (20) primary key,
	codigoDoVooVolta varchar (20) not null,
	ida date not null, 
	volta date not null, 
	tempoIda varchar (20) not null,
	tempoVolta varchar (20)not null,
	nomeDoHotel varchar (100) not null, 
	entradaDoHotel date not null, 
	saídaDoHotel date not null,
	avaliaçãoDoHotel int, 
	descriçãoDoHotel varchar (100), 
	valorPorViajante varchar (100) not null, 
	taxasImpostos int not null, 
	valorFinalPorDoisViajantes varchar (100) not null
 );
 


 create table destinos(
	id int primary key,
	nome varchar (100) not null,
	FK_voo_codigoDoVooIda varchar(20),
    foreign key(FK_voo_codigoDoVooIda) references voo(codigoDoVooIda)
);
 

 
 create table guias(
	cod int primary key,
    nome varchar (100) not null,
	telefone varchar (11),
    email varchar (20) not null,
    senha varchar (20),
    cpf varchar (20) not null,
    FK_destinos_id int,
	foreign key (FK_destinos_id) references destinos(id)
);



create table passagens(
	cod int primary key,
    númeroDeVoo varchar (100) not null,
    codigoDoVoo varchar (20),
    desmbarque varchar (100) not null ,
	dia date not null, 
    Hora varchar (20) not null,
    nomeCompanhia varchar (10) not null,
    embarque varchar (100) not null,
    FK_turistas_cpf varchar(11),
    foreign key(FK_turistas_cpf) references turistas(cpf)
);



create table hotel(
	cod int primary key,
    checkin date,
    checkiAlt date,
	hotel varchar (100) not null,
    FK_passagens_cod int,
	foreign key (FK_passagens_cod) references passagens(cod)
);



create table pacotes( 
	cod int primary key,
	nome varchar (100) not null,
	avaliarGuias varchar (100),
	formaDePagamento varchar (50) not null,
	FK_hotel_cod int,
	foreign key (FK_hotel_cod) references hotel(cod)
);



create table cadastroParaFazerPagamentos(
	nomeDoUsuario varchar (100) not null,
    dataDeNascimento date,
    sexo varchar (20),
    email varchar (30) not null,
	celular int not null,
	cpf int not null
    
);



create table dadosDoPagamento(
	dataDeNascimento date,
	cpf varchar (11) not null,
    email varchar (20) not null,
	telefone varchar (11) not null
);



create table cadastroDoCartãoDeCrédito(
    numero varchar (100) not null,
    mesValidade varchar (20),
    anoValidade int,
    codSegurança int,
    empresaDoCartão varchar (100) not null
);



create table recomendados(
	nome varchar (100) not null,
	dataDeIda date not null,
	dataDeVolta date not null,
	preço int not null,
	horaIda varchar (20) not null,
	horaVolta varchar (20) not null,
	códigoDoAeroporto varchar (20)
);



create table pacoteshotel( 
	FK_pacotes_cod int,
    FK_hotel_cod int,
    lugar varchar (100),
    horário varchar (20),
    dia date,
    PRIMARY KEY(FK_pacotes_cod, FK_hotel_cod),
    FOREIGN KEY(FK_pacotes_cod) REFERENCES pacotes(cod),
    FOREIGN KEY(FK_hotel_cod) REFERENCES hotel(cod)
);



create table turistaspassagens(
	FK_turistas_cpf varchar(20),
    FK_passagens_cod int,
    dia date, 
    hora VARCHAR(20),
	PRIMARY KEY(FK_turistas_cpf, FK_passagens_cod),
    FOREIGN KEY(FK_turistas_cpf) REFERENCES turistas(cpf),
    FOREIGN KEY(FK_passagens_cod) REFERENCES passagens(cod) );
    
 