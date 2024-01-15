# Estrutura Condicional if

A estrutura condicional if é uma construção fundamental em muitas linguagens de programação, permitindo que blocos de código sejam executados com base na avaliação de uma condição. A sintaxe básica é a seguinte:

```javascript
if (condicao) {
  // Bloco de código a ser executado se a condição for verdadeira
} else {
  // Bloco de código a ser executado se a condição for falsa
}
```

condicao: Uma expressão que é avaliada como verdadeira ou falsa.
Se a condicao for verdadeira, o bloco de código dentro do primeiro par de chaves {} é executado; caso contrário, o bloco dentro do else (opcional) é executado.

## Operadores Lógicos

Os operadores lógicos são utilizados para realizar operações de comparação entre valores e produzir um resultado booleano (verdadeiro ou falso).

Os principais operadores lógicos são:

### Operador && (E lógico):

Retorna verdadeiro se ambas as condições forem verdadeiras.

_Exemplo:_

```javascript
if (idade >= 18 && possuiCarteiraDeMotorista) {
  // Bloco de código a ser executado se a idade for maior ou igual a 18 e possuir carteira de motorista
}
```

### Operador || (OU lógico):

Retorna verdadeiro se pelo menos uma das condições for verdadeira.

_Exemplo:_

```javascript
if (temExperiencia || estaEstudandoCienciaDaComputacao) {
  // Bloco de código a ser executado se tiver experiência ou estiver estudando Ciência da Computação
}
```

### Operador ! (Negação lógica):

Inverte o valor da condição, transformando verdadeiro em falso e vice-versa.

Exemplo:

```javascript
if (!temExperiencia) {
  // Bloco de código a ser executado se não tiver experiência
}
```

### Operador >, < (Maior que, Menor que)

Os operadores > (maior que) e < (menor que) são utilizados para comparar valores numéricos. Aqui estão exemplos:

```javascript
let idade = 25;

if (idade > 18) {
  console.log("Você é maior de idade");
} else {
  console.log("Você é menor de idade");
}
```

Neste exemplo, se a idade for maior que 18, a mensagem "Você é maior de idade" será exibida; caso contrário, a mensagem "Você é menor de idade" será exibida.

### Operador % (Módulo)

O operador % (módulo) retorna o resto da divisão entre dois números. É frequentemente utilizado para verificar se um número é divisível por outro. Exemplo:

```javascript
let numero = 15;

if (numero % 2 === 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}
```

Neste exemplo, o operador % é usado para verificar se numero é divisível por 2. Se o resto da divisão for zero, o número é considerado par; caso contrário, é ímpar.

Esses operadores lógicos podem ser combinados para criar condições mais complexas e controlar o fluxo do programa com base em diferentes situações.
