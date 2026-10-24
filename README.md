# EduInvest — Simulador de investimentos em Excel

Projeto de estudo para um desafio da DIO. O arquivo `eduinvest_exercicio.xlsx` simula aportes mensais, patrimônio e dividendos e distribui o aporte entre tipos de fundos imobiliários (FIIs) conforme o perfil selecionado.

## Perguntas respondidas

As entradas e os resultados ficam na aba `Planilha1`. A `Planilha2` contém os parâmetros dos perfis.

| Pergunta | Local na Planilha1 | Como funciona |
| --- | --- | --- |
| Quanto corresponde a 30% do salário? | D12 | Salário de D10 multiplicado por 30%. |
| Quanto posso acumular? | D18 | Usa aporte de D15, prazo em anos de D16 e taxa mensal de D17. |
| Quanto o patrimônio pode gerar de dividendos mensais? | D19 | Multiplica o patrimônio pelo rendimento de D11. |
| Quais os resultados em 2, 5, 10, 20 e 30 anos? | C23:D27 | Patrimônio na coluna C e dividendos mensais na coluna D. |
| Como distribuir o aporte por perfil? | C29 e B35:D40 | Seleção do perfil em C29, percentuais em C35:C40 e valores em D35:D40. |
| Qual é o total distribuído? | D41 | Soma de D35:D40. |

## Como usar

1. Abra o arquivo no Excel.
2. Na `Planilha1`, informe salário em D10 e rendimento mensal da carteira em D11.
3. Preencha aporte mensal em D15, prazo em anos em D16 e taxa mensal em D17.
4. Consulte patrimônio, dividendos e cenários.
5. Selecione Conservador, Moderado ou Agressivo em C29 e observe a distribuição.

D15 é uma entrada independente: a sugestão de D12 não é transferida automaticamente para ela. C30 recebe o aporte de D15 por fórmula.

D17 alimenta a projeção de patrimônio. D11 alimenta a estimativa de dividendos sobre esse patrimônio. Mudar somente o perfil altera a distribuição do aporte; patrimônio e dividendos não dependem do perfil nas fórmulas existentes.

## VF e PROCV

As fórmulas abaixo estão no formato do Excel em português. No XLSX, as funções são armazenadas como `FV` e `VLOOKUP`, equivalentes a `VF` e `PROCV`.

### VF: valor futuro

Em `Planilha1!D18`:

```excel
=VF(taxa_mensal;tempo_invest*12;aporte*-1)
```

Calcula o valor futuro de aportes mensais constantes. O prazo em anos é multiplicado por 12 para ficar na mesma unidade da taxa. O aporte negativo representa uma saída de dinheiro, produzindo patrimônio futuro positivo. Como valor presente e tipo foram omitidos, considera saldo inicial zero e aportes no fim de cada mês.

Os cenários de C23:C27 também usam VF. Exemplo em C23:

```excel
=VF($D$17;$A23*12;$D$15*-1)
```

D19 calcula dividendos com `=patrimonio*Rendim_carteira`. Nos cenários, cada patrimônio da coluna C é multiplicado por `Rendim_carteira` para gerar a coluna D.

### PROCV: busca dos percentuais

Em `Planilha1!C35`:

```excel
=PROCV(Perfil&"-"&B35;Planilha2!C:F;4;FALSO)
```

Combina perfil e tipo de FII, formando uma chave como `Conservador-PAPEL`. Busca essa chave na coluna C da `Planilha2` e retorna o percentual da coluna F, quarta coluna de C:F. `FALSO` exige correspondência exata. O padrão se repete em C35:C40.

Na tabela de apoio, as chaves são montadas pela união do perfil, um hífen e o tipo, como em `=D4&"-"&E4`.

Em D35, `=C35*aporte_perfil` transforma o percentual em valor. O padrão se repete até D40. D41 totaliza com `=SOMA(D35:D40)`.

## Intervalos nomeados

Foi utilizada a funcionalidade de intervalos nomeados, o que facilita a referência da célula e não só isto, facilita ao desenvolvedor se lembrar dos campos. A nomeação do intervalo inibe também possíveis erros de não fixação do endereço ao arrastar para copiar fórmulas, pois, um intervalo nomeado não se move.

| Nome | Célula | Finalidade |
| --- | --- | --- |
| salario | D10 | Salário informado |
| Rendim_carteira | D11 | Taxa para estimar dividendos mensais |
| sugestao_investimento | D12 | Valor correspondente a 30% do salário |
| aporte | D15 | Aporte mensal informado |
| tempo_invest | D16 | Prazo em anos |
| taxa_mensal | D17 | Taxa mensal do valor futuro |
| patrimonio | D18 | Patrimônio acumulado estimado |
| dividendos | D19 | Dividendos mensais estimados |
| Perfil | C29 | Perfil selecionado |
| aporte_perfil | C30 | Aporte usado na distribuição |



## Percentuais dos perfis e origem

| Tipo de FII | Conservador | Moderado | Agressivo |
| --- | ---: | ---: | ---: |
| Papel | 30% | 32% | 50% |
| Tijolo | 50% | 40% | 10% |
| Híbridos | 10% | 8% | 5% |
| FOFs | 10% | 10% | 5% |
| Desenvolvimento | 0% | 10% | 20% |
| Hotelarias | 0% | 0% | 10% |
| **Total** | **100%** | **100%** | **100%** |

A origem operacional é a tabela `Planilha2!C4:F21`: Conservador nas linhas 4 a 9, Moderado nas linhas 10 a 15 e Agressivo nas linhas 16 a 21. Os percentuais estão digitados na coluna F e são consultados pelo PROCV.

Este projeto é um exercicio, logo os percentuais foram arbitrados pelo expert. São parâmetros didáticos. A comparação com o arquivo `planilha resolvida do expert.xlsx` confirmou que os perfis Conservador e Agressivo coincidem integralmente com o modelo fornecido. No perfil Moderado, esta versão apresenta três pesos diferentes, detalhados abaixo.

 Simulação salva no arquivo

| Entrada ou resultado | Valor |
| --- | ---: |
| Salário | R$ 4.200,00 |
| Sugestão de investimento: 30% | R$ 1.260,00 |
| Aporte mensal | R$ 1.260,00 |
| Prazo | 5 anos |
| Taxa mensal para acumulação | 1,079% |
| Rendimento para estimar dividendos | 0,7% ao mês |
| Patrimônio acumulado | R$ 105.558,91 |
| Dividendos mensais estimados | R$ 738,91 |
| Perfil selecionado | Conservador |

A distribuição salva é R$ 378,00 em Papel, R$ 630,00 em Tijolo, R$ 126,00 em Híbridos e R$ 126,00 em FOFs. Desenvolvimento e Hotelarias recebem R$ 0,00. Total: R$ 1.260,00.

Esses são resultados armazenados na versão analisada. As projeções usam taxas constantes e não incluem descontos explícitos de inflação, impostos ou custos nas fórmulas descritas. Trata-se de uma simulação educacional.

## Diferenças em relação à ferramenta do expert

A comparação com o arquivo `planilha resolvida do expert.xlsx` evidenciou as seguintes diferenças verificáveis:

| Item | Arquivo do expert | Esta versão |
| --- | --- | --- |
| Nome da aba principal | APP | Planilha1 |
| Bloco de configurações | B11:D14 | B9:D12 |
| Bloco de investimento mensal | B16:D21 | B14:D19 |
| Cenários | A24:D28 | A23:D27 |
| Seletor de perfil | C32 | C29 |
| Tabela de apoio dos perfis | Planilha2!A3:D20 | Planilha2!C4:F21 |
| Nomes funcionais definidos | 7 | 10 |
| Nome do prazo | qtd_anos | tempo_invest |
| Nome do rendimento da carteira | rendimento_carteira | Rendim_carteira |
| Referência do perfil no PROCV | $C$32 | Nome definido Perfil |
| Referência do aporte na distribuição | $C$33 | Nome definido aporte_perfil |
| Identificação textual do perfil | Sem fórmula equivalente nas células da aba principal | Fórmula em B33 mostra o perfil selecionado |

Os nomes `dividendos`, `Perfil` e `aporte_perfil` estão presentes nesta versão e não constam na lista de nomes definidos do arquivo do expert. A lógica central de VF, da estimativa de dividendos e da busca por chave composta com PROCV foi mantida, com referências adaptadas.

No perfil Moderado, os pesos diferem:

| Tipo de FII | Expert | Esta versão |
| --- | ---: | ---: |
| Tijolo | 35% | 40% |
| FOFs | 5% | 10% |
| Hotelarias | 10% | 0% |

Papel (32%), Híbridos (8%) e Desenvolvimento (10%) permanecem iguais no Moderado. Os dois conjuntos somam 100%. A comparação confirma as diferenças, mas não estabelece quem as realizou nem sua motivação.

As entradas salvas também diferem: o expert usa salário de R$ 2.000,00, aporte de R$ 200,00, rendimento da carteira de 0,6% e perfil Moderado. Esta versão usa R$ 4.200,00, R$ 1.260,00, 0,7% e perfil Conservador. Ambas usam prazo de 5 anos e taxa mensal de acumulação de 1,079%. Essas diferenças de entrada explicam os diferentes resultados salvos e não representam mudança na lógica financeira.

## Evidências de funcionamento

Para documentar o funcionamento, mantenha salário, aporte, prazo e taxas e registre a tela com dois perfis, por exemplo, Conservador e Moderado. Mostre o perfil selecionado e a distribuição em cada print.

Com aporte de R$ 1.260,00, a distribuição esperada pelos percentuais é:

| Tipo de FII | Conservador | Moderado |
| --- | ---: | ---: |
| Papel | R$ 378,00 | R$ 403,20 |
| Tijolo | R$ 630,00 | R$ 504,00 |
| Híbridos | R$ 126,00 | R$ 100,80 |
| FOFs | R$ 126,00 | R$ 126,00 |
| Desenvolvimento | R$ 0,00 | R$ 126,00 |
| Hotelarias | R$ 0,00 | R$ 0,00 |
| **Total** | **R$ 1.260,00** | **R$ 1.260,00** |

A coluna Moderado acima é uma conferência aritmética dos parâmetros, não um registro de teste executado no Excel. Ao mudar somente o perfil, patrimônio e dividendos devem permanecer iguais, pois usam as mesmas entradas financeiras.

