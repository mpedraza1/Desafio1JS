//Pedimos la temperatura en celsius
let tempCelsiusK = parseInt(prompt("Ingrese una temperatura en °Celsius"))
let tempCelsiusF = parseInt(prompt("Ingrese una temperatura en °Celsius"))

//Aqui calculamos los grados en kelvin
resulKelvin = (tempCelsiusK + 273.15)
//Aqui hacemos el calculo para farenheit
resulFarenheit = ((tempCelsiusF * 9/5) + 32)

//Aqui se muestra el resultado en la consola
console.log(resulKelvin)
console.log(resulFarenheit)