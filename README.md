# Dashboard de vendas de assinaturas Xbox Game Pass

Projeto desenvolvido como exercício da DIO, com foco na organização e visualização de dados de vendas no Excel.

O dashboard reúne informações de assinaturas Xbox Game Pass e dos adicionais EA Play Season Pass e Minecraft Season Pass, permitindo consultar valores por tipo de assinatura e comparar vendas conforme a opção de renovação automática.

## Arquivo do projeto

- [dashboard_xbox.xlsx](dashboard_xbox.xlsx): pasta de trabalho com a base de dados, os cálculos e o dashboard.

## Dados utilizados

A tabela de origem, chamada `Tabela1`, ocupa A1:M296 na aba Bases e contém **295 registros**, com datas de início entre **01/01/2024 e 16/12/2024**.

Os 13 campos são:

| Campo | Informação |
| --- | --- |
| Subscriber ID | Identificador do assinante |
| Name | Nome do assinante |
| Plan | Plano: Core, Standard ou Ultimate |
| Start Date | Data de início |
| Auto Renewal | Opção de renovação automática: Yes ou No |
| Subscription Price | Preço da assinatura |
| Subscription Type | Modalidade: Monthly, Quarterly ou Annual |
| EA Play Season Pass | Indicação de contratação do adicional EA Play |
| EA Play Season Pass Price | Valor do adicional EA Play |
| Minecraft Season Pass | Indicação de contratação do adicional Minecraft |
| Minecraft Season Pass Price | Valor do adicional Minecraft |
| Coupon Value | Valor do cupom |
| Total Value | Valor total registrado |

Os dados estão incluídos no próprio arquivo utilizado no exercício. Não há indicação no arquivo de uma fonte pública externa nem de vínculo com vendas reais da Microsoft.

## Organização da pasta de trabalho

Os nomes das abas possuem um efeito de sublinhado na primeira letra. A estrutura é:

| Aba | Finalidade |
| --- | --- |
| Assets | Paleta de cores, imagens, logos e ícones |
| Bases | Registros de assinaturas na tabela de origem |
| Cálculos | Três Tabelas Dinâmicas e células que alimentam os cartões |
| Dashboard | Painel visual e segmentação de dados |

Na versão entregue, somente a aba Dashboard está visível. As demais estão ocultas para concentrar a navegação no painel.

## Análises disponíveis

- **Valores do EA Play Season Pass:** cartão com a soma dos preços desse adicional, conforme o filtro selecionado.
- **Valores do Minecraft Season Pass:** cartão com a soma dos preços desse adicional, conforme o filtro selecionado.
- **Vendas por renovação automática:** gráfico de barras que compara a soma de `Total Value` entre as opções `Yes` e `No` de `Auto Renewal`.
- **Filtro por modalidade:** segmentação `Subscription Type`, conectada às três Tabelas Dinâmicas, com as opções Annual, Monthly e Quarterly.

Os cartões apresentam valores monetários, e não a quantidade de assinaturas. Os valores estão formatados em reais no dashboard.

### Exemplo salvo

O arquivo foi salvo com o filtro **Monthly** selecionado:

| Indicador | Valor |
| --- | ---: |
| EA Play Season Pass | R$ 1.350,00 |
| Minecraft Season Pass | R$ 1.800,00 |
| Total Value — sem renovação automática | R$ 2.824,00 |
| Total Value — com renovação automática | R$ 747,00 |
| Total Value — total do recorte mensal | R$ 3.571,00 |

Esses valores foram conferidos por agregação dos registros da base. O total do recorte mensal corresponde à soma das duas categorias de renovação automática.

## Recursos do Excel aplicados

- Tabela estruturada para organizar a base.
- Tabelas Dinâmicas para agrupar e somar os dados.
- Gráfico de barras vinculado à Tabela Dinâmica de renovação automática.
- Segmentação de dados conectada às três análises.
- Função `INFODADOSTABELADINÂMICA` (`GETPIVOTDATA` no arquivo) para recuperar os totais dos adicionais.
- Formas vinculadas a células para exibir os indicadores nos cartões.
- Formatação monetária e composição visual com cores, imagens e ícones.
- Separação entre dados, cálculos, recursos visuais e apresentação.

Os cartões estão vinculados às células F25 e F36 da aba Cálculos. Essas células consultam os totais das Tabelas Dinâmicas de EA Play e Minecraft, respectivamente.

## Como abrir e reproduzir

1. Baixe `dashboard_xbox.xlsx` e abra-o no Excel para desktop, com suporte a Tabelas Dinâmicas e segmentação de dados.
2. Acesse a aba Dashboard.
3. Na segmentação `Subscription Type`, selecione Annual, Monthly ou Quarterly.
4. Compare os cartões dos adicionais e o gráfico por renovação automática.
5. Para visualizar o conjunto completo, use a opção de limpar o filtro da segmentação.

### Para inspecionar ou atualizar a base

1. Clique com o botão direito em uma guia de planilha e use **Reexibir** para mostrar Bases e Cálculos.
2. Consulte ou atualize os registros dentro da tabela `Tabela1`, preservando os cabeçalhos e os tipos de dados.
3. Se adicionar registros, confirme que eles passaram a fazer parte da tabela.
4. Use **Dados → Atualizar Tudo** para atualizar as Tabelas Dinâmicas.
5. Retorne ao Dashboard e confira os resultados para cada modalidade.

Os preços e o campo `Total Value` estão armazenados como valores na base. Ao acrescentar dados, esses campos também precisam ser preenchidos; o arquivo não contém fórmulas por registro para calculá-los automaticamente.
