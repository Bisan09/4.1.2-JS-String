/*Apartado 1*/

let cadena = "Hola Mundo";

/*Apartado 2*/

console.log("Longitud:", cadena.length);

/*Apartado 3*/

console.log("Mayúsculas:", cadena.toUpperCase());

/*Apartado 4*/

console.log("Minúsculas:", cadena.toLowerCase());

/*Apartado 5*/

console.log("Posición de 'o':", cadena.indexOf("o"));

/*Apartado 6*/

console.log("Posición de 'Hola':", cadena.indexOf("Hola"));

/*Apartdo 7*/

let nuevaCadena = cadena.replace("Mundo", "Youtube");
console.log("Reemplazo:", nuevaCadena);

/*Apartado 8*/

let segundaParte = cadena.split(" ")[1];
console.log("Segunda parte:", segundaParte);

/*Apartado 9*/

console.log("Empieza por 'h'?:", cadena.startsWith("h"));

/*Apartado 10*/

console.log("Empieza por 'H'?:", cadena.startsWith("H"));

/*Apartado 11*/

console.log(`${"r".repeat(10)}`);

/*Apartado 12*/

let nombre = "Ivan";
let apellidos = "Bisan Etame Gómez";
let edad = 23;

/*Apartado 13*/

console.log(`Nombre: ${nombre}, Apellidos: ${apellidos}, Edad: ${edad}`);
