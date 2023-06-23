//Operadores de comparacion

const ciudadDestino="Bogota";
const ciudadesDisponibles=new Array("Bogota","Lima","Santiago","Montevideo");

//Palabra reservada if 
//Evalua una condicion 
if(ciudadesDisponibles.indexOf(ciudadDestino)>=0){
    console.log('Pasaje disponible para venta');
}else{
    console.log('Ciudad no disponible para viajar')
}

const valorPasaje="1000";

if(valorPasaje===1000){
    console.log('El pasaje vale 1000')
}

//Evalua una condicion

//Operadores logicos
//Y (AND) - O (OR) - NO (NOT)
// AND = &&
// OR = ||
// NOT !
let edadPasajero=17;
let estaAcompanado=true;

console.log(`Verificando pasajes para ${ciudadDestino}`);
if((ciudadesDisponibles.indexOf(ciudadDestino)>-1) && (edadPasajero>=18|| estaAcompanado)){
    console.log('Pasaje disponible para venta');
}else{
    console.log('Ciudad no disponible para viajar or pasajero no cumple las reglas')
}

 edadPasajero=17;
 estaAcompanado=false;

console.log(`Verificando pasajes para ${ciudadDestino}`);
if((ciudadesDisponibles.indexOf(ciudadDestino)>-1) && (edadPasajero>=18|| estaAcompanado)){
    console.log('Ciudad no disponible para viajar or pasajero no cumple las reglas');

}else{
    console.log('Pasaje disponible para venta');

}