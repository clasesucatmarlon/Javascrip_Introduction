/*
Escribe un programa que le pida dos frases al usuario e imprima los caracteres que tienen en común. Si no tienen caracteres en común debe imprimir "No se encontraron caracteres en común".

Ejemplo 1:

Ingresa frase 1> German
Ingresa frase 2> Gabriela
Los caracteres en común son: G, e, r, a
Ejemplo 2:

Ingresa frase 1> Hola
Ingresa frase 2> Bye
No se encontraron caracteres en común
*/

let sentence1 = prompt("Input sentence 1: ");
let sentence2 = prompt("Input sentence 2: ");

let sent1 = sentence1.toLowerCase(sentence1);
sent1 = sent1.replace(/ /g, '');
let sent2 = sentence2.toLowerCase(sentence2);
sent2 = sent2.replace(/ /g, '');
let a = [];

for (let i = 0; i < sent1.length; i++) {
    for (let j = 0; j < sent2.length; j++) {
        if (sent1[i] === sent2[j]) {
            a.push(sent1[i]);
        }
    }
}

for (let i = a.length - 1; i > 0; i--) {
    let elem = a[i];
    for (let j = i - 1; j >= 0; j--) {
        if (elem == a[j]) {
            a.splice(j, 1);
        }
    }
}


/* console.log(a); */

if (a.length === 0) {
    console.log('No common characters were found')
} else {
    console.log('The common characters are: (' + a.join(' - ') + ')')
}
