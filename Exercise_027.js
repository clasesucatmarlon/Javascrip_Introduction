/*
Escribe un programa que le pida una frase al usuario e imprima cada palabra en una nueva línea. Por ejemplo:

Ingresa una frase> esta es una prueba
esta
es
una
prueba
Nota: Las palabras se separan por espacio.
*/

let sentence = prompt("Input sentence: ");

let spl = sentence.split(' ')

console.log(spl.join('\n'))