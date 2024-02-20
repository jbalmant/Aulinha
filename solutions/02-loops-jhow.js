// Exercício 1:
function somaDosNumeros(numero) {
  let soma = 0;

  for (let i = 0; i <= numero; i++) {
    soma = soma + i;
  }

  return soma;
}

console.log('**** INICIO EXERCICIO 1');
console.log('5 - ' + somaDosNumeros(5));
console.log('10 - ' + somaDosNumeros(10));

// Exercício 2:
function tabuada(numero) {
  let texto = "";

  for (let i = 1; i <= 10; i++) {
    texto += `${numero} X ${i} = ${numero * i}\n`
  }

  return texto;
}

console.log('**** INICIO EXERCICIO 2');
console.log('Tabuada 5 \n' + tabuada(5));
console.log('Tabuada 10 \n' + tabuada(10));

// Exercicio 3:
function contagemRegressiva(numero) {
  let texto = "";

  for (let i = numero; i >= 1; i--) {
    texto += i + '\n';
  }

  return texto;
}

console.log('**** INICIO EXERCICIO 3');
console.log('Contagem Regressiva 5 \n' + contagemRegressiva(5));
console.log('Contagem Regressiva 10 \n' + contagemRegressiva(10));

// Exercicio 4:
function fatorial(numero) {
  let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial = fatorial * i;
  }

  return fatorial;
}

console.log('**** INICIO EXERCICIO 4');
console.log('Fatorial 5 \n' + fatorial(5));
console.log('Fatorial 10 \n' + fatorial(10));

// Exercicio 5:
function numerosPares() {
  let texto = '';

  // Jeito 1
  // for (let i = 1; i < 51; i++) {
  //   if (i % 2 === 0) {
  //     texto += i + '\n';
  //   }
  // }

  // Jeito 2
  for (let i = 2; i < 51; i += 2) {
    texto += i + '\n';
  }

  return texto;
}

console.log('**** INICIO EXERCICIO 5');
console.log(numerosPares());

// Exercicio 6:
function adivinhacao() {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

  let acertou = false;
  let tentativas = 0;

  while (!acertou) {
    // Poderia pegar do PROMPT, estou usando random só pra poder rodar no terminal
    const numeroDoUsuario = Math.floor(Math.random() * 100) + 1;
    tentativas++;

    if (numeroDoUsuario === numeroAleatorio) {
      acertou = true;
      console.log(`******* ACERTOU O NUMERO PREMIADO ${numeroDoUsuario} APOS ${tentativas} TENTATIVAS ********`)
    } else if (numeroDoUsuario > numeroAleatorio) {
      console.log(`${numeroDoUsuario} ERROU - Tem que ser MENOR`)
    } else {
      console.log(`${numeroDoUsuario} ERROU - Tem que ser MAIOR`)
    }
  }
}

console.log('**** INICIO EXERCICIO 6');
adivinhacao();

// Exercicio 7:
function mediaNotas() {
  const numeroDeNotas = 5;
  let soma = 0;

  for (let i = 0; i < numeroDeNotas; i++) {
    // Poderia pegar do PROMPT, estou usando random só pra poder rodar no terminal
    const notaDoAluno = Math.floor(Math.random() * 10) + 1;
    console.log({ notaDoAluno })
    soma += notaDoAluno;
  }

  console.log(`A média do aluno é ${soma / numeroDeNotas}`);
}

console.log('**** INICIO EXERCICIO 7');
mediaNotas();

// Exercicio 8
function fibonacci(numero) {
  if (numero < 1) {
    return 'Erro, número não pode menor que 1';
  }

  let texto = '0';
  let penultimo = 0;
  let ultimo = 1;

  if (numero >= 2) {
    texto += ' 1'
  }

  for (let i = 2; i < numero; i++) {
    const somaDosAnteriores = penultimo + ultimo;
    texto += ' ' + somaDosAnteriores;

    penultimo = ultimo;
    ultimo = somaDosAnteriores;
  }

  return texto;
}

console.log('**** INICIO EXERCICIO 8');
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(5));
