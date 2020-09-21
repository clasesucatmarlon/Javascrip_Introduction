/*
Escribe un programa que le pida una frase al usuario y capitalice cada palabra. Por ejemplo:

Ingresa una frase> esta es una prueba
Esta Es Una Prueba
*/

let sentence = prompt("Input sentence: ");

let spl = sentence.split(' ')

for (let i = 0; i < spl.length; i++) {
  spl[i] = spl[i].charAt(0).toUpperCase() + spl[i].substring(1, spl[i].length)
}

console.log(spl.join(' '))