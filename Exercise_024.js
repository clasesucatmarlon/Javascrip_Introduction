/*
Escribe un programa que le pida una frase al usuario y le muestre el número de caracteres "a" que hay en la frase. Por ejemplo:

Ingresa una frase> Hasta la próxima
La frase tiene 4 caracteres "a"
*/

let sentence = prompt("Input sentence: ");

let cont = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === 'a' || sentence[i] === 'A') {
    cont++;
  }
}
console.log('The sentence have ' + cont + ' words a')