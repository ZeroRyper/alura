const ciudadesDisponibles=new Array("Bogota","Lima","Santiago","Montevideo");
const precioCiudad=new Array(500,400,380,200);
const presupuestoDisponible=600;
const datos=[
    {
        'ciudad':'Bogota',
        'precio':500
    },
    {
        'ciudad':'Lima',
        'precio':400
    }, 
    {
        'ciudad':'Santiago',
        'precio':380
    }, 
    {
        'ciudad':'Montevideo',
        'precio':200
    }
]

let i=0;

//While... 0 o mas veces
//Do ... 1 o mas veces
// while(precioCiudad[i]>presupuestoDisponible && i< ciudadesDisponibles.length){
//     i++;
// }
let ciudadSeleccionada='';
do{
    if(datos[i].precio<presupuestoDisponible){
        ciudadSeleccionada=datos[i].ciudad;
        break;
    }
    i++;
}while(i<datos.length && ciudadSeleccionada)
console.log(i);
if(ciudadSeleccionada==''){
    console.log("No tenemos pasajes disponibles");
}
else{
    console.log("Puedes comprar pasaje para: "+ciudadSeleccionada);

}