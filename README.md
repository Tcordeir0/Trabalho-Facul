# Trabalho-Facul
Aqui está um documento que descreve o funcionamento da calculadora implementada no Visual Studio Code, usando HTML, CSS e JavaScript. O documento aborda a estrutura geral do código, as funções implementadas e a interatividade da interface.

### Descrição Geral do Projeto de Calculadora

Este projeto consiste em uma aplicação web de uma calculadora que oferece funções matemáticas básicas, bem como funções avançadas como cálculo de MDC (Máximo Divisor Comum), MMC (Mínimo Múltiplo Comum), verificação se um número é divisível por outro, determinação se um número é primo ou composto, se é par ou ímpar, fatoração em números primos e verificação se um número é múltiplo de outro.

#### Estrutura do Código

**HTML:**
O HTML define a estrutura básica da página web, incluindo a seção da calculadora com um display onde os números e resultados são exibidos. Além disso, inclui botões para as operações matemáticas e opções avançadas. Cada botão possui um evento `onclick` que chama a função JavaScript correspondente.

**CSS:**
O CSS é usado para estilizar a página, definindo cores, alinhamentos e dimensões dos elementos da calculadora. A estética segue um tema escuro, similar ao design de calculadoras em dispositivos móveis da Apple, com um toque de cor para os botões de operações avançadas.

**JavaScript:**
O JavaScript é utilizado para adicionar a funcionalidade interativa da calculadora. As operações básicas são implementadas através da função `eval()`, que é uma maneira rápida de calcular expressões matemáticas representadas como strings. Para operações avançadas, funções específicas foram criadas para calcular MDC, MMC, verificar primalidade, entre outros.

### Funções Implementadas

**Operações Básicas:**
- **Adição, Subtração, Multiplicação, Divisão**: Usuários podem inserir operações básicas usando os botões correspondentes na interface.

**Operações Avançadas:**
- **MDC e MMC**: Cálculo do Máximo Divisor Comum e Mínimo Múltiplo Comum de dois números.
- **Divisibilidade**: Verifica se um número é divisível por outro.
- **Primalidade**: Determina se um número é primo ou composto.
- **Paridade**: Verifica se um número é par ou ímpar.
- **Fatoração**: Decompõe um número em seus fatores primos.
- **Multiplicidade**: Verifica se um número é múltiplo de outro.

### Interatividade

A interatividade é gerenciada através de eventos de clique nos botões, que chamam funções JavaScript. Os resultados das operações são imediatamente mostrados no display da calculadora ou numa área de resultados para operações avançadas.

### Considerações sobre o design

O design visa uma experiência de usuário intuitiva e agradável, com feedback visual imediato e acessibilidade dos botões e funções.

### Conclusão

Este projeto de calculadora não apenas fornece as funções matemáticas básicas e avançadas, mas também introduz uma interface amigável e visualmente agradável, que é responsiva e fácil de usar. As funções de cálculo avançado adicionam um valor educacional significativo, tornando-a uma ferramenta útil para estudantes e profissionais.

Este documento serve como um guia para entender a estrutura e funcionalidade do código da calculadora. É importante para a manutenção do código e para futuras melhorias ou personalizações da aplicação.

**
BY: Talys Matheus Cordeiro Silva - Kaue Augustus Pio Silva - Wesley Rodrigues Oliveira - Murillo Silva Rosa**
