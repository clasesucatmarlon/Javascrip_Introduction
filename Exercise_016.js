/*
Escribe un programa que:

Le pida al usuario un string (una cadena de texto).
Si el string es "salir" (todo en minúsculas) el programa debe imprimir en la consola "Hasta pronto!" y terminar.
De lo contrario imprime en la consola lo que el usuario ingresó y repite el proceso desde el paso 1.
*/

s = prompt('input string (salir for exit): ')

let salir = true

while (salir) {
  if (s === 'salir') {
    console.log('Good bye!!!!')
    salir = false 
  }
  else {
    s = prompt('input string (salir for exit): ')
    console.log(s)
  }
}