/*
Escribe un programa para la consola que le pida al usuario un número e imprima los números desde 1 hasta el número.

Por ejemplo, si el usuario ingresa el número 5, el programa de be imprimir:

1
2
3
4
5
*/

n = Number(prompt('input number: '))

for (i = 1; i <= n; i++) {
  console.log(i)
}