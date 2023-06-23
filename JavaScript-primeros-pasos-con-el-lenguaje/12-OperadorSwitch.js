const ciudadDestino="Lima";
const ciudadesDisponibles=new Array("Bogota","Lima","Santiago","Montevideo");

let edadPasajero=17;
let estaAcompanado=true;
let valorPasaje=0;
/*
if(ciudadesDisponibles.indexOf(ciudadDestino)>-1){
    if(ciudadDestino=="Bogota"){
        valorPasaje=500;
    }
    else if(ciudadDestino=="Lima"){
        valorPasaje=400;
    }
    else if(ciudadDestino=="Santiago"){
        valorPasaje=300;
    }
    else if(ciudadDestino=="Montevideo"){
        valorPasaje=200;
    }
    console.log(`El valor del pasaje es: ${valorPasaje}`);

}else{
    console.log('Ciudad no disponible para viajar');

}
*/
switch(ciudadDestino){
    case "Bogota":
        valorPasaje=500;
        break;
    case "Lima":
        valorPasaje=400;
        break;
    case "Santiago":
        valorPasaje=300;
        break;
    case "Montevideo":
        valorPasaje=200;
        break;
    default:
        valorPasaje=0;
        break;
}
if(valorPasaje>0){
    console.log(`El valor del pasaje es: ${valorPasaje}`);

}