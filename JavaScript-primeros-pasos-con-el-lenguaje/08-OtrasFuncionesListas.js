//Definicion de una lista con tipo de dato alfanumerico
const ciudadesDisponibles=new Array("Bogota","Lima","Santiago","Montevideo");
//console.log(ciudadesDisponibles);

//Definicion de una lista de forma abreviada
const paisesDisponibles=["Colombia","Peru","Chile","Brasil","Argentina","Uruguay","Venezuela"]

const cantidadCiudades=ciudadesDisponibles.length;

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`);

//Remover el primer elemento
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);
//Remover el ultimo elemento
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

//Filtro de elementos de la lista
const paisesFiltrados=paisesDisponibles.filter((e)=>e.length>6);
console.log(paisesFiltrados);

//Unifcar los elementos en una cadena de caracteres
console.log(paisesDisponibles.join('-'));

//Ordenar la lista 
console.log(paisesDisponibles.sort());

//Conociendo la posicion
console.log(`Peru esta en la posicion: ${paisesDisponibles.indexOf('Peru')}`);

//Unificar dos lista
const listaPaisesYCiudades=paisesDisponibles.concat(ciudadesDisponibles);
console.log('Lista de paises y ciudades');
console.log(listaPaisesYCiudades);
console.log('Lista de paises');
console.log(paisesDisponibles);



