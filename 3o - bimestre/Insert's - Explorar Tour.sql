#//  Login no site dos turistas :
SELECT * FROM turistas
WHERE email = 'laís@gmail' AND senha = 'Lais82*';

#// ---------------------------------------------------------

#// Login no site dos guias:
SELECT * FROM guias 
WHERE email = 'joao@gmail.com' AND senha = 'Joaozin23.';

#// ---------------------------------------------------------

#// Pacotes que a empresa recomenda:
SELECT nome, dataDeIda, dataDeVolta, preço, horaIda, horaVolta, códigoDoAeroporto FROM recomendados
ORDER BY preço DESC;

#// ---------------------------------------------------------

#// Personalize seu pacote:
SELECT concat ('destinos', 'hotel', 'voo') AS selecione FROM pacotes;

#// ---------------------------------------------------------

#// Detalhes sobre o destino dos pacotes recomendados:
SELECT 
    codigoDoVooIda AS "Código do Voo de Ida",
    codigoDoVooVolta AS "Código do Voo de Volta",
    ida AS "Data de Ida",
    volta AS "Data de Volta",
    tempoIda AS "Duração do Voo de Ida",
    tempoVolta AS "Duração do Voo de Volta",
    nomeDoHotel AS "Hotel",
    entradaDoHotel AS "Data de Entrada no Hotel",
    saídaDoHotel AS "Data de Saída do Hotel",
    avaliaçãoDoHotel AS "Avaliação do Hotel",
    descriçãoDoHotel AS "Descrição do Hotel",
    valorPorViajante AS "Valor por Viajante",
    taxasImpostos AS "Taxas e Impostos",
    valorFinalPorDoisViajantes AS "Valor Final para Dois Viajantes"
FROM voo;

#// ---------------------------------------------------------

#// Informações pessoais para fazer o pagamento:
SELECT 
    'Lais' AS nomeDoUsuario,  
    dp.dataDeNascimento AS dataDeNascimento,
    'Feminino' AS sexo,           
    dp.email AS email,
    CAST(dp.telefone AS UNSIGNED) AS celular, 
    CAST(dp.cpf AS UNSIGNED) AS cpf 
from
    dadosDoPagamento dp;

#// ---------------------------------------------------------


#// Cadastro do cartão de crédito:
SELECT 
    numero AS 'Número do Cartão',
    mesValidade AS 'Mês de Validade',
    anoValidade AS 'Ano de Validade',
    codSegurança AS 'Código de Segurança',
    empresaDoCartão AS 'Empresa do Cartão'
FROM 
    cadastroDoCartãoDeCrédito;
    
#// ---------------------------------------------------------

#// Dados para fazer pagamento:
SELECT 
	dataDeNascimento as Nascimento,
    cpf AS CPF,
    email AS Email,
    telefone AS Telefone
FROM 
    dadosDoPagamento;
