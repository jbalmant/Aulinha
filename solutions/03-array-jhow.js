console.log('**** EXERCICIO 1')

function somaDosElementos(array) {
  let soma = 0;

  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }

  return soma;
}

console.log(somaDosElementos([1, 2]))
console.log(somaDosElementos([1, 2, 5]))
console.log(somaDosElementos([1, 2, 5, 5]))
console.log(somaDosElementos([1, 2, 5, 81]))

// =============================================================================
console.log('**** EXERCICIO 2')

function maiorElementoDoArray(array) {
  let maiorNumero = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }

  return maiorElementoDoArray;
}

console.log(maiorElementoDoArray([1, 2, 8, 3]));
console.log(maiorElementoDoArray([241, 2332, 23428, 50000, 300]));

// =============================================================================
console.log('**** EXERCICIO 3')

function mediaDosElementos(array) {

  let soma = 0;

  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }

  return soma / array.length;
}

console.log(mediaDosElementos([1, 2, 8, 5]));
console.log(mediaDosElementos([3, 7]));
console.log(mediaDosElementos([2, 1, 34, 42, 34, 3, 7]));

// ### 4. Contagem de Pares e Ímpares:
// Implemente uma função que conte e retorne a quantidade de números pares e ímpares em um array.
function contagemDeParesEImpares(array) {
  let par = 0;
  let impar = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      par++; // par = par + 1
    } else {
      impar++;// console.log(array[i] + ' é impar')
    }
  }

  return [par, impar];
}

console.log(contagemDeParesEImpares([3, 5, 7, 9, 11, 13])); //[0, 6]
console.log(contagemDeParesEImpares([8, 6, 9, 5])); //[2, 2]
console.log(contagemDeParesEImpares([8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9])); //[5, 6]

// 5. Reverso:
// Escreva uma função que inverta a ordem dos elementos em um array.
// function inversaoDeArray(array) {
//   let array2 = [];

//   for (let i = array.length - 1; i >= 0; i--) {
//       array2.push(array[i])
//   }
  
//   return array2
// }

function inversaoDeArray(array) {
  for (let i = 0; i < array.length / 2; i++) {
    const ultimaGaveta = array.length -1 - i;
    const temp = array[i];
    array[i] = array[ultimaGaveta];
    array[ultimaGaveta] = temp;
  }
  
  return array
}

console.log(inversaoDeArray(['faca', 'garfo', 'colher', 'danone'])) // [3, 2, 1]
console.log(inversaoDeArray([11, 22, 33, 44, 66])) // [6, 4, 3, 2, 1]
