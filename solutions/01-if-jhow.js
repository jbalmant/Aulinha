// Exercicio 1
function positivoNegativoZero(numero) {
  if (numero > 0) {
    return 'Positivo'
  } else if (numero < 0) {
    return 'Negativo'
  } else {
    return 'Zero'
  }
}

console.log('**** START Exercicio 1')
console.log(`0 - ${positivoNegativoZero(0)}`)
console.log(`10 - ${positivoNegativoZero(10)}`)
console.log(`-2 - ${positivoNegativoZero(-2)}`)

//  Exercicio 2
function classificacaoDeIdade(idade) {
  if (idade < 12) {
    return 'Criança'
  } else if (idade < 18) {
    return 'Adolescente'
  } else if (idade < 30) {
    return 'Adulto Jovem'
  } else {
    return 'Adulto'
  }
}

console.log('**** START Exercicio 2')
console.log(`5 - ${classificacaoDeIdade(5)}`)
console.log(`14 - ${classificacaoDeIdade(14)}`)
console.log(`24 - ${classificacaoDeIdade(24)}`)
console.log(`34 - ${classificacaoDeIdade(34)}`)

// Exercicio 3
function parOuImpar(numero) {
  if (numero % 2 == 0) {
    return 'Par'
  } else {
    return 'Impar'
  }
}

console.log('**** START Exercicio 3')
console.log(`5 - ${parOuImpar(5)}`)
console.log(`6 - ${parOuImpar(6)}`)

// Exercicio 4
function maiorOuIgual(numero1, numero2) {
  if (numero1 === numero2) {
    return 'Iguais'
  } else if (numero1 > numero2) {
    return 'Numero 1 é maior que o numero 2'
  } else {
    return 'Numero 1 é menor que o numero 2'
  }
}

console.log('**** START Exercicio 4')
console.log(`5 5 - ${maiorOuIgual(5, 5)}`)
console.log(`6 8 - ${maiorOuIgual(6, 8)}`)
console.log(`19 3 - ${maiorOuIgual(19, 3)}`)

// Exercicio 5
function calculadoraSimples(numero1, numero2, operacao) {
  if (operacao === '-') {
    return numero1 - numero2;
  }

  if (operacao === '+') {
    return numero1 + numero2;
  }

  if (operacao === '*') {
    return numero1 * numero2;
  }

  if (operacao === '/') {
    if (numero2 === 0)
      return "Não é possível dividir por Zero"

    return numero1 / numero2;
  }
}

console.log('**** START Exercicio 5')
console.log(`19 3 + - ${calculadoraSimples(19, 3, '+')}`)
console.log(`19 3 - - ${calculadoraSimples(19, 3, '-')}`)
console.log(`19 3 * - ${calculadoraSimples(19, 3, '*')}`)
console.log(`19 3 / - ${calculadoraSimples(19, 3, '/')}`)
console.log(`19 0 / - ${calculadoraSimples(19, 0, '/')}`)

// Exercicio 6
function classificarTriangulo(lado1, lado2, lado3) {
  if (lado1 === lado2 && lado2 === lado3) {
    return 'equilátero'
  } else if (lado1 === lado2 || lado1 === lado3) {
    return 'isósceles'
  } else {
    return 'escaleno'
  }
}

console.log('**** START Exercicio 6')
console.log(`10 10 10 - ${classificarTriangulo(10, 10, 10)}`)
console.log(`10 10 11 - ${classificarTriangulo(10, 10, 11)}`)
console.log(`10 12 11 - ${classificarTriangulo(10, 12, 11)}`)

// Exercicio 7
function programaDeRecompensas(totalDeCompras, valorTotalDeCompras) {
  if (totalDeCompras > 10 && valorTotalDeCompras > 500) {
    return 'Qualificada'
  } else {
    return 'Não foi dessa vez'
  }
}

console.log('**** START Exercicio 7')
console.log(`9 499 - ${programaDeRecompensas(9, 499)}`)
console.log(`11 499 - ${programaDeRecompensas(11, 499)}`)
console.log(`9 501 - ${programaDeRecompensas(9, 501)}`)
console.log(`11 501 - ${programaDeRecompensas(11, 501)}`)

// Exercicio 8
function loginSimples(nomeDeUsuario, senha) {
  if ((nomeDeUsuario === 'admin' && senha === 'senha123') || nomeDeUsuario === 'user' && senha === 'userpass') {
    return 'Acesso concedido'
  } else {
    return 'Acesso negado'
  }
}

console.log('**** START Exercicio 7')
console.log(`admin senha123 - ${loginSimples("admin", "senha123")}`)
console.log(`admin userpass - ${loginSimples("admin", "userpass")}`)
console.log(`user userpass - ${loginSimples("user", "userpass")}`)
console.log(`user senha123 - ${loginSimples("user", "senha123")}`)
console.log(`xpto xurupita - ${loginSimples("xpto", "xurupita")}`)
