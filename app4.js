//Leer los dias que ingresó el cliente
//400 dias -> 1 año, x semanas? x dias?

//Aqui se solicita al usuario la cantidad de dias
let totalDiasString = prompt("ingrese cantidad de dias")
let totalDiasNumero = parseInt(totalDiasString)

//Aqui se hacen los calculos
let anhos = Math.floor(totalDiasNumero/365)
let semanas = Math.floor((totalDiasNumero % 365) /7)
let dias = Math.floor((totalDiasNumero%365) %7)

//Mostrar el texto con sus respectivos resultados
console.log(`

    El resultado es:
    años: ${anhos} años,
    semanas: ${semanas} semanas,
    dias: ${dias} dias

`)