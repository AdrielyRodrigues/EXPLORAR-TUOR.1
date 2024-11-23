insert into turistas (cpf, telefone, usuário, email, senha)
values ('5247896321', '12345680123', 'Laís', 'laís@gmail', 'Lais82*'),
 ('25869311', '155874', 'Gabi', 'gabi@gmail' , '25#Gabi'), 
 ('8887740012', '66870', 'Joana', 'joana@gmail' , '14@Joana');



insert into voo (codigoDoVooIda, codigoDoVooVolta, ida, volta, tempoIda, tempoVolta, nomeDoHotel, entradaDoHotel, saídaDoHotel, avaliaçãoDoHotel, descriçãoDoHotel, valorPorViajante, taxasImpostos, valorFinalPorDoisViajantes )
values ('MCZ', 'GIG', '2027-02-17', '2027-02-21', '10h e 25min', '10h e 25min', 'Casa Blanca Park Hotel', '2025-02-17', '2025-02-21', 3, '1x Standard por casal, sem café da manhã', '2.644,08', ' 198', ' 3.106,16 Não Rembolsavél '  );



insert into guias (cod, nome, telefone, email, senha, cpf)
values (1, 'João', '1225833-60', 'joao@gmail.com', 'Joaozin23.', '22255544499'),
(2, 'Pedro', '8521473-41', 'pedro@gmail.com', 'pd23+', '33366611188'),
(3, 'Carlos', '8633578-80', 'carlos@gmail.com', '67Carloz-', '77755533355');



insert into passagens (cod, númeroDeVoo, desmbarque, dia, Hora, nomeCompanhia, embarque)
values (1, '12345678912345', '11225587344', '2020-09-10','12:30', 'Latan', '1002345' ), 
(2, '5887', '1455874', '2024-08-26', '14:08', 'Gol', '784125' ), 
(3, '558741', 2001478, '2023-07-25', '10:40', 'Azul', '9665547' );



insert into hotel (cod, checkin, checkiAlt, hotel, FK_passagens_cod)
values (7, '2021-12-01', '2021-12-30', 'Japaratinga Lounge Resort', 1),
(8, '2021-11-25', '2021-12-12', 'Paradise Vista do Atlântico', 2),
(9, '2023-06-07', '2023-08-14', 'Vistamar Hotel', 3);



insert into pacotes (cod, nome, avaliarGuias, formaDePagamento, FK_hotel_cod)
values (5, 'pacotes1', 5, 'pix', 7),
  (4, 'pacotes2', 4, 'boleto', 8),
  (6, 'pacotes3', 8,'debito', 9);
  
  
 
 insert into cadastroParaFazerPagamentos (nomeDoUsuario, dataDeNascimento, sexo, email, celular, cpf)
 values ('Laís', '2000-02-28', 'Feminino', 'laís@gmail', '98874565', '524789631'),
 ('Gabi', '1999-06-06', 'Feminino', 'gabi@gmail', '982251563', '2586931'),
 ('Joana', '1980-05-08', 'Feminino', 'joana@gmail', '983327478','888774001');
 

 
 insert into dadosDoPagamento (dataDeNascimento, cpf, email, telefone)
values ('2000-08-26', '52747896321', 'lais@gmail.com', '85988745658'),
('1999-05-28', '52478963215', 'gabi@gmail.com', '22982251563'),
('1995-05-03', '88888774012', 'joana@gmail.com', '82983327478');



 insert into cadastroDoCartãoDeCrédito (numero, mesValidade, anoValidade, codSegurança, empresaDoCartão)
 values ('7412 3589 017 7748', 'Março', '2030', '564', 'Inter'),
 ('8899 5545 4779 5632', 'Agosto', '2027', '985', 'Numbanck'),
 ('2233 5999 1253 8951', 'Abril', '2035', '669', 'Mercado Livre');
 


insert into recomendados (nome, dataDeIda, dataDeVolta, preço, horaIda, horaVolta, códigoDoAeroporto)
values ('Angra Dos Reis - RJ', '2025-03-23', '2025-03-02', '1488', '15:05', '17:00',  'GDR'),
('Porto Seguro - BA', '2025-02-17', '2025-02-21' , '1178', '13:30', '20:50', 'BPS'),
('Maceió - AL', '2025-03-05', '2025-03-10' , '2026', '14:15', '23:10', 'MCZ');



insert into pacoteshotel (FK_pacotes_cod, FK_hotel_cod, lugar, horário, dia)
values (5, 7, 'Posto Seguro', '08:35', '2027-02-17');



insert into turistaspassagens (FK_turistas_cpf, FK_passagens_cod, dia, hora)
values ('5247896321', 1, '2020-09-10', '12:30' )

  

