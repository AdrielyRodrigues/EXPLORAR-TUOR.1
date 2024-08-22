insert into turistas (cpf, telefone, usuário, email)
values ('12212212212', '12345680123', 'Laís', 'laís@gmail'),
 ('2257410', '155874', 'Gabi', 'gabi@gmail'), 
 ('336854', '66870', 'Joana', 'joana@gmail');



insert into passagens (cod, númeroDeVoo, desmbarque, dia, Hora, nomeCompanhia, embarque)
values (1, '12345678912345', '11225587344', '2020-09-10','12:30', 'Latan', '1002345' ), 
(2, '5887', '1455874', '2024-08-26', '14:08', 'Gol', '784125' ), 
(3, '558741', 2001478, '2023-07-25', '10:40', 'Azul', '9665547' );



insert into hospedagem (cod, checkin, checkiAlt, hotel, FK_passagens_cod)
values (7, '2021-12-01', '2021-12-30', 'Japaratinga Lounge Resort', 1),
(8, '2021-11-25', '2021-12-12', 'Paradise Vista do Atlântico', 2),
(9, '2023-06-07', '2023-08-14', 'Vistamar Hotel', 3);



insert into guias (cod, cadastro, nome, telefone, email, enviarCurriculos)
values (1, '1255873', 'joão', '1225833-60', 'joao@gmail', 'site'),
 (2, '255879', 'Pedro', '8521473-41', 'pedro@gmail', 'email'),
  (3, '98875', 'Carlos', '8633578-80', 'carlos@gmail', 'aplicativos');
  
insert into excurcoes (cod, dia, destino, roteiros, hora, valor, FK_guias_cod)
values (4,'2024-07-26', 'Rio de Janeiro', 'roteiro1', '13:25', '1500', 1),
(5,'2021-08-24', 'Rio Grande do Sul', 'roteiro2', '23:00', '5000', 2),
(6,'2020-10-06', 'Rio Grande do Norte', 'roteiro3', '15:40', '1580', 3);
  

insert into calendario (cod, diasDisponiveis, excurcaoDisponivel, hora, FK_excurcoes_cod)
values (1, '2020-05-24', 'excurcao1', '14:20', 4),
(2, '2021-12-21', 'excurcao2', '14:50', 5),
(3, '2022-10-10', 'excurcao3', '14:00', 6);

insert into pacotes (cod, nome, avaliarGuias, formaDePagamento, FK_hospedagem_cod)
values (5, 'pacotes1', '5', 'pix', 7),
  (4, 'pacotes2', '3', 'boleto', 8),
  (6, 'pacotes3', '4', 'debito', 9);
  
insert into turistaspassagens (FK_turistas_cpf, FK_passagens_cod, dia, hora)
values ('12212212212', 1, '2020-09-10','12:30');
  



