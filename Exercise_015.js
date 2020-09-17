/*
Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

5
6
7
8
9
10
*/

s = Number(prompt('input number to start: '))
f = Number(prompt('input number to finish: '))

for (i = s; i <= f; i++) {
  console.log(i)
}