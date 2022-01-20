//Solicitamos los 5 numeros con cada prompt

let num1 = parseInt(prompt("Ingrese un numero"))
let num2 = parseInt(prompt("Ingrese un numero"))
let num3 = parseInt(prompt("Ingrese un numero"))
let num4 = parseInt(prompt("Ingrese un numero"))
let num5 = parseInt(prompt("Ingrese un numero"))

//Aqui se está calculando la suma y el promedio
let suma = num1 + num2 + num3 + num4 + num5
let promedio = suma / 5
//console.log(promedio)

//Aqui se muestra en la consola el resultado, precedido por la frase correspondiente
console.log(`el resultado de la suma es: ${suma}
  el promedio es: ${promedio}`)