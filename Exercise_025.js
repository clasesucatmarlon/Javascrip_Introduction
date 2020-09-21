/*
Escribe un programa que le pida una frase al usuario y le muestre una nueva frase con los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter "a" por "4".
Reemplaza el caracter "e" por "3".
Reemplaza el caracter "i" por "1".
Reemplaza el caracter "o" por "0".
*/

let sentence = prompt("Input sentence: ");

sentence = sentence.toLowerCase(sentence)

sentence = sentence.replace(/ /g, '')

sentence = sentence.replace(/a/g, 4)

sentence = sentence.replace(/e/g, 3)

sentence = sentence.replace(/i/g, 1)

sentence = sentence.replace(/o/g, 0)

console.log(sentence)
