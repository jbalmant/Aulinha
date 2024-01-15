# Loops em Programação: `for`, `while` e `do-while`

Os loops são estruturas fundamentais na programação, permitindo a repetição de blocos de código enquanto determinadas condições são atendidas. Vamos explorar três tipos comuns de loops em diversas linguagens, como JavaScript, Python, e C++.

## Loop `for`

O loop `for` é especialmente útil quando você conhece antecipadamente o número de iterações. Ele possui três partes principais:

```javascript
for (inicialização; condição; expressão de atualização) {
    // Código a ser repetido
}
```

1. Inicialização: É onde você configura a variável de controle ou outras configurações antes do início do loop.
   2.Condição: Uma expressão booleana que, enquanto verdadeira, mantém a execução do loop.
2. Expressão de Atualização: Executada após cada iteração, geralmente usada para incrementar ou decrementar a variável de controle.

Exemplo em JavaScript:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## Loop while

O loop while é utilizado quando o número de iterações não é conhecido antecipadamente. Sua estrutura é simples:

```javascript
while (condição) {
  // Código a ser repetido
}
```

O bloco de código dentro do while é executado repetidamente enquanto a condição fornecida for verdadeira.

Exemplo em JavaScript:

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

## Loop do-while

Semelhante ao while, o do-while executa um bloco de código enquanto a condição é verdadeira. A diferença crucial é que o bloco é executado pelo menos uma vez, pois a verificação da condição ocorre após a execução.

```javascript
do {
  // Código a ser repetido
} while (condição);
```

Exemplo em JavaScript:

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

Esses loops são ferramentas poderosas para controlar o fluxo de um programa e são amplamente utilizados em algoritmos e lógica de programação.
