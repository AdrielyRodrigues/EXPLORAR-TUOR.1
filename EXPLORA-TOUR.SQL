create database explorartuor;

use explorartuor; 
 
 create table turistas(
	cpf varchar (11) primary key, 
    telefone varchar (11) not null,
    usuário varchar (100) not null,
    email varchar (20) not null
 );
 
create table passagens(
	cod int primary key,
    númeroDeVoo varchar (14) not null,
    desmbarque varchar (100) not null,
	dia date not null, 
    Hora varchar (20) not null,
    nomeCompanhia varchar (10) not null,
    embarque varchar (100) not null,
    FK_turistas_cpf varchar(11),
    foreign key(FK_turistas_cpf) references turistas(cpf)

);

create table hospedagem(
	cod int primary key,
    checkin date,
    checkiAlt date,
	hotel varchar (100) not null,
    FK_passagens_cod int,
	foreign key (FK_passagens_cod) references passagens(cod)
);
create table guias(
	cod int primary key,
    cadastro varchar (16) not null,
    nome varchar (100) not null,
	telefone varchar (11),
    email varchar (20),
	enviarCurriculos varchar (50) not null,
    FK_hospedagem_cod int,
	foreign key (FK_hospedagem_cod) references hospedagem(cod)
    
);

create table excurcoes(
	cod int primary key,
    dia date,
	destino varchar (100)  not null,
    roteiros varchar (100),
    hora varchar(20),
    valor int, 
    FK_guias_cod int,
    foreign key (FK_guias_cod) references guias(cod)
    );
    
create table calendario(
	cod int primary key,
	diasDisponiveis date, 
    excurcaoDisponivel varchar (100),
    hora varchar (20) not null,
    FK_excurcoes_cod int,
    foreign key (FK_excurcoes_cod) references excurcoes(cod)
    
);

create table pacotes( 
cod int primary key,
nome varchar (100),
avaliarGuias varchar (100),
formaDePagamento varchar (50),
FK_hospedagem_cod int,
foreign key (FK_hospedagem_cod) references hospedagem(cod)

);


create table turistaspassagens(
	FK_turistas_cpf varchar(11),
    FK_passagens_cod int,
    dia date, 
    hora VARCHAR(20),
     PRIMARY KEY(FK_turistas_cpf, FK_passagens_cod),
    FOREIGN KEY(FK_turistas_cpf) REFERENCES turistas(cpf),
    FOREIGN KEY(FK_passagens_cod) REFERENCES passagens(cod)
    
    
	);








