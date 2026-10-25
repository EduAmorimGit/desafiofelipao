# Organizador de informações para declaração de Imposto de Renda

Projeto educacional desenvolvido durante curso de EXCEL com IA na DIO. Reproduzi a ferramenta apresentada pelo professor Felipão, para praticar a criação de uma interface no Excel, a organização de informações e o uso de recursos que facilitam o preenchimento.

O arquivo do projeto é `Projeto IR meu.xlsx`.

## Objetivo

Reunir dados cadastrais do titular, informações bancárias e registros de receitas em uma única pasta de trabalho. O foco deste exercício é a organização dos dados e a experiência de uso da planilha.

A ferramenta não calcula o imposto devido nem transmite a declaração à Receita Federal.

## Organização da planilha

| Aba | Conteúdo | Localização na minha versão |
| --- | --- | --- |
| TITULAR | Dados pessoais, endereço, contatos e respostas cadastrais | Campos em D5:D18, com rótulos na coluna C |
| INFORMES | Três blocos para identificar bancos, registrar valores e indicar documentos de referência | C10:D23 |
| NOTAS | Registro de entradas por data, categoria e valor | Tabela1, em C8:E35 |
| TABELAS | Relação de 50 bancos usada como base de apoio | A1:A50 |

### TITULAR

Contém campos para nome, CPF, nascimento, título de eleitor, cônjuge, endereço, CEP, telefone, celular e e-mail.

Os campos D16:D18 usam uma lista com as opções `SIM` e `NÃO` para registrar alteração em relação à entrega anterior, dependência do cônjuge e residência no exterior.

### INFORMES

Cada bloco reúne banco, valor atual e nome de um documento de referência:

| Bloco | Banco | Valor | Referência do documento |
| --- | --- | --- | --- |
| 1º banco | D11 | D12 | D13 |
| 2º banco | D16 | D17 | D18 |
| 3º banco | D21 | D22 | D23 |

O total fica em C8 e usa a fórmula:

```excel
=SOMA(D12;D17;D22)
```

### NOTAS

A tabela possui as colunas `DATA`, `CATEGORIA` e `VALOR`, com espaço de preenchimento nas linhas 9 a 35.

A coluna de categorias usa uma lista suspensa com `HOLERITE`, `CNPJ` e `FREELANCE`. A tabela estruturada possui filtros configurados e estilo com linhas alternadas. Não há fórmula de totalização das receitas nessa aba na versão entregue.

## Conceitos praticados

- **Layout e identidade visual:** uso de formas, imagens, ícones, agrupamento de objetos, cores, fontes e preenchimentos em gradiente para compor as telas.
- **Formatação de células:** organização de títulos e campos, alinhamento, mesclagem de células e apresentação de valores monetários.
- **Navegação por hiperlinks:** formas usadas como botões para acessar as abas e avançar ou retornar entre etapas.
- **Links externos:** ícone com acesso ao meu LinkedIn e hiperlink de e-mail no cadastro do titular.
- **Formatos numéricos:** máscaras de CPF, CEP, telefone e celular, além de datas e valores em reais.
- **Validação de dados:** listas de respostas cadastrais, categorias de receita e bancos.
- **Mensagens de orientação:** aviso de preenchimento associado à seleção dos bancos.
- **Tabela estruturada:** organização das entradas em uma Tabela do Excel, chamada `Tabela1`.
- **Fórmula SOMA:** consolidação automática dos três valores da aba INFORMES.
- **Proteção de planilhas:** proteção das três abas de preenchimento, sem senha, com campos de entrada desbloqueados.
- **Apresentação da interface:** linhas de grade e cabeçalhos de linhas e colunas ocultos nas três telas principais.

Os formatos de CPF, CEP e telefone alteram a apresentação dos números. Eles não verificam, por si só, a validade dos documentos ou a quantidade correta de dígitos.

## Formatos aplicados

| Informação | Local de exemplo | Apresentação |
| --- | --- | --- |
| CPF | TITULAR!D6 | 000.000.000-00 |
| Nascimento | TITULAR!D7 | Formato de data do Excel |
| CEP | TITULAR!D12 | 00000-000 |
| Telefone | TITULAR!D13 | (00) 0000-0000 |
| Celular | TITULAR!D14 | (00) 00000-0000 |
| Competência da receita | NOTAS!C9:C35 | Nome do mês e ano, com formato `mmmm-yyyy` |
| Valores | INFORMES e NOTAS | Reais, com duas casas decimais |

Durante as aulas, foi apresentado um pequeno código VBA para posicionar os ícones no mesmo local entre as telas.


Também foram personalizados elementos gráficos e a mensagem de orientação da seleção de bancos. Essas mudanças representam a reprodução e adaptação do exercício, sem alterar seu objetivo central.

## Observações da versão atual

- O hiperlink de e-mail do cadastro ainda aponta para o endereço usado no modelo do professor.
- A proteção sem senha ajuda a preservar o preenchimento e o layout. Ela não representa criptografia ou controle de acesso ao arquivo.

## Como utilizar

1. Abra `Projeto IR meu.xlsx` no Excel.
2. Preencha os campos da aba TITULAR.
3. Acesse INFORMES pelo menu e registre as informações dos bancos.
4. Consulte o total calculado e registre os nomes dos documentos de referência.
5. Na aba NOTAS, preencha data, categoria e valor de cada entrada.
6. Salve uma cópia preenchida para manter o modelo disponível.

As abas TITULAR, INFORMES e NOTAS estão protegidas sem senha. Para inspecionar ou ajustar a estrutura, use a opção de desproteger a planilha na guia Revisão do Excel.

A análise que originou esta documentação verificou a estrutura, as fórmulas e as configurações salvas dos arquivos. Não representa um teste de cliques, preenchimento ou execução de macros no Excel.
