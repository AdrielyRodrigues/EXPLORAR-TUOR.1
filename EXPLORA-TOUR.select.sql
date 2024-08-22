#// selecione apenas nomes dos guias que começe com a letra "P": 

select nome from guias; 

select nome from guias where nome like "P%";


#// Contar o Número Total de Turistas:

SELECT COUNT(*) AS total_turistas FROM turistas;

#//  Listar todos os pacotes que utilizam uma forma de pagamento específica
SELECT * FROM pacotes 
WHERE formaDePagamento = 'pix';



#// Verificar o calendário de uma determinada excursão
SELECT * FROM calendario 
WHERE FK_excurcoes_cod = (SELECT cod FROM excurcoes WHERE destino = 'Rio de Janeiro');


#// Obter detalhes de uma excursão com um valor acima de um determinado limite
SELECT destino, roteiros, valor FROM excurcoes 
WHERE valor > 1500;


#//  Selecionar o nome e contato de todos os guias cadastrados
SELECT nome, telefone, email FROM guias;



#// Obter a lista de pacotes avaliados com nota igual ou superior a 4
SELECT nome, avaliarGuias FROM pacotes 
WHERE avaliarGuias >= 3;





#//  Contar o número total de turistas cadastrados
SELECT COUNT(*) AS total_turistas 
FROM turistas;



#// Obter o valor máximo, mínimo e a média dos valores das excursões
SELECT MAX(valor) AS valor_maximo, 
       MIN(valor) AS valor_minimo, 
       AVG(valor) AS valor_medio
FROM excurcoes;


#//  Selecionar as excursões mais caras para cada destino
SELECT destino, MAX(valor) AS valor_maximo 
FROM excurcoes
GROUP BY destino;



#//   Selecionar as hospedagens cujo período (checkin até checkiAlt) é maior que 15 dias
SELECT cod, hotel, DATEDIFF(checkiAlt, checkin) AS dias_hospedagem 
FROM hospedagem 
WHERE DATEDIFF(checkiAlt, checkin) > 15;




