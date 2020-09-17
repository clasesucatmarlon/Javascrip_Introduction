/*
Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.

Por ejemplo, si el usuario ingresó la frase "Hola Mundo" y el número 5, el programa debe imprimir "Hola Mundo" 5 veces:

Hola Mundo
Hola Mundo
Hola Mundo
Hola Mundo
Hola Mundo
*/

w = prompt('Input a sentence: ')
n = Number(prompt('input number: '))

for (i = 1; i <= n; i++) {
  console.log(w)
}