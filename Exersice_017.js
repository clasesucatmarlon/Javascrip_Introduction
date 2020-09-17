/*
Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores). La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número.
*/

const r = Math.floor(Math.random() * 5) + 1

s = Number(prompt('input number: '))

let exactly = true

while (exactly) {
  if (r === s) {
    exactly = false 
    console.log('Congratulations!!!! ')

  }
  else {
    s = Number(prompt('input number: '))
  }
}