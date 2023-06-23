const ciudadDestino="Bogota";
const ciudadesDisponibles=new Array("Bogota","Lima","Santiago","Montevideo");

let edadPasajero=17;
let estaAcompanado=true;
let tienePasaporte=true;
let estaCasado=false;

console.log(`Verificando pasajes para ${ciudadDestino}`);

//A && B || C
if((ciudadesDisponibles.indexOf(ciudadDestino)>-1) && (edadPasajero>=16 && tienePasaporte && !estaCasado)){
    console.log('Paquete para solteros disponible para venta');
}else{
    console.log('Ciudad no disponible para viajar or pasajero no cumple las reglas')
}
