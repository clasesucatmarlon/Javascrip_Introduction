/*
Escribe un programa que le pida un número al usuario e imprima en la consola si el número es mayor o menor/igual a 10.

Si es mayor debe imprimir "El número es mayor a 10".

Si es menor debe imprimir "El número es menor o igual a 10".
*/
let number = prompt('Input number: ')
if (parseInt(number) > 10) {
  console.log('The number is great that 10')
} else {
  console.log('The number is less or equal that 10')
}