function somaDosElementos(array) {
  let soma = 0;

  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }

  return soma;
}

console.log('**** EXERICIO 1')
console.log(somaDosElementos([1, 2]))
console.log(somaDosElementos([1, 2, 5]))
console.log(somaDosElementos([1, 2, 5, 5]))
console.log(somaDosElementos([1, 2, 5, 81]))

function maiorElementoDoArray(array) {
  let maiorNumero = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }

  return maiorElementoDoArray;
}

console.log('**** EXERICIO 2')
console.log(maiorElementoDoArray([1, 2, 8, 3]));
console.log(maiorElementoDoArray([241, 2332, 23428, 50000, 300]));

function mediaDosElementos(array) {
  let soma = 0;

  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }

  return soma / array.length;
}

console.log('**** EXERICIO 3')
console.log(mediaDosElementos([1, 2, 8, 5]));
console.log(mediaDosElementos([3, 7]));
console.log(mediaDosElementos([2, 1, 34, 42, 34, 3, 7]));
