/*
Escribir un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!"
*/
const r = Math.floor(Math.random() * 10) + 1
number = prompt('Input a number between 1 and 10: ')
if (parseInt(number) === r) {
  console.log('Congratulations, this is !!!!!!')
} else {
  console.log('I am sorry, your lose.  you wrote the number ' + number + ' and it was ' + r)
}
