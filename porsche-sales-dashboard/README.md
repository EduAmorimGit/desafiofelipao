# Porsche Sales Atelier

Dashboard interativo de vendas Porsche, construído a partir de uma planilha Excel tratada e publicado como página estática no GitHub Pages.

Projeto desenvolvido no curso de **Excel com IA** da [DIO](https://www.dio.me/).

> **Acesse o dashboard:** [eduamorimgit.github.io/desafiofelipao/porsche-sales-dashboard](https://eduamorimgit.github.io/desafiofelipao/porsche-sales-dashboard/)

---

## Objetivo

Transformar uma planilha de vendas em um painel visual, elegante e filtrável, que responda a perguntas de negócio sem precisar abrir o Excel.

## Perguntas de negócio respondidas

| # | Pergunta | Onde está no painel |
|---|----------|---------------------|
| 01 | Quais os principais modelos de carros vendidos por cidade? | Ranking de cidades com modelo líder + mapa de calor Linha × Estado |
| 02 | Qual ano e modelo de carro mais vendido em um período? | Vendas por trimestre, Top 10 modelos e matriz Ano-modelo × Linha |
| 03 | Quais os carros populares por cidade (insights)? | Seis cartões de insight gerados automaticamente a partir dos filtros |

## Funcionalidades

**Filtros**
- Linha (911, 718, Taycan, Macan, Cayenne, Panamera)
- Modelo da Porsche (agrupado por linha)
- Cidade
- Ano-modelo
- Método de pagamento
- Período da venda (mês inicial e final)

**Indicadores (KPIs)**
- Total de vendas e percentual entregue
- Receita total
- Ticket médio (com menor e maior valor)
- Modelo mais vendido
- Ano-modelo líder

**Visualizações**
- Ranking de cidades ordenável, com busca e clique para filtrar
- Mapa de calor Linha × Estado
- Gráfico de vendas por trimestre
- Top 10 modelos, coloridos por linha
- Matriz Ano-modelo × Linha
- Insights dinâmicos em texto

Todos os números se recalculam ao mudar qualquer filtro. Os gráficos mostram detalhes ao passar o mouse.

## Design

Inspirado no site oficial da [Porsche Brasil](https://www.porsche.com/brazil/pt/): layout limpo, tipografia larga em caixa alta nos rótulos e muito espaço em branco.

Paleta nude e discreta:

| Cor | Uso |
|-----|-----|
| Azul acinzentado `#6f8db3` | Volume de vendas, mapas de calor, linha Taycan |
| Malva `#8c78a6` | Linha 718, destaques do ranking |
| Cinza quente `#9c958f` | Linha Cayenne |
| Vermelho queimado `#b5646d` | Linha 911, marcador do maior valor |
| Rosé `#cfa3a8` | Linha Panamera |
| Lavanda `#b0a3c7` | Linha Macan |

O painel tem tema claro e escuro, que acompanha a configuração do sistema, e funciona no celular.

## Base de dados

- **Arquivo de origem:** `Planilha_Porsche_tratada_gpt.xlsx`, aba `db_psc_25354543_no_tracked`
- **Registros:** 100 vendas, 79 cidades, 33 estados (EUA), 40 variações de modelo
- **Campos usados:** data da venda, modelo, ano-modelo, preço, método de pagamento, cidade, estado e status de entrega
- **Moeda:** dólar americano (US$)

### Tratamentos e observações

- A coluna **Linha** foi derivada do nome do modelo (ex.: `911 Turbo S` → `911`).
- **24 vendas têm data inválida** (`INVALID`). Elas entram nos totais, mas ficam de fora quando um período é filtrado.
- A **receita** soma todos os preços, inclusive vendas canceladas ou pendentes.
- Em caso de empate no modelo mais vendido, o desempate é pela maior receita.

## Tecnologias

- HTML, CSS e JavaScript puros, em um único arquivo (`index.html`)
- Gráficos desenhados em SVG, sem bibliotecas externas
- Fonte [Archivo](https://fonts.google.com/specimen/Archivo) (Google Fonts)
- Dados extraídos da planilha com Python (pandas) e embutidos no HTML
- Construído com apoio do **Claude** (Anthropic)

Como os dados estão dentro do arquivo, o dashboard abre direto no navegador, sem servidor e até sem internet.

## Estrutura do repositório

```
├── index.html   # o dashboard completo (dados + layout + gráficos)
└── README.md    # este arquivo
```
## Como atualizar os dados

Se a planilha mudar, é preciso gerar o `index.html` de novo com os dados novos e reenviar o arquivo ao repositório. O GitHub Pages atualiza sozinho após o commit.

## Autor

**Luis Eduardo Vieira Amorim** · [GitHub](https://github.com/eduamorimgit) · [LinkedIn](https://www.linkedin.com/in/eduardovieiraamorim/)

Projeto do curso Excel com IA, DIO, 2026, Professor Felipão
