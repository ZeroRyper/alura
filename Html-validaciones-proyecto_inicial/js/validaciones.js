export function valida(input){
    const tipoDeInput=input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML="";

    }
    else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML=mostrarMensajeDeError(tipoDeInput,input);

    }
}
const tipoDeErrores=[
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];
const mensajesDeError={
nombre:{
    valueMissing:"Este campo no puede estar vacio",
},
email:{
    valueMissing:"Este campo correo no puede estar vacio",
    typeMismatch:"El correo no es valido",//Si no cumple con los requisitos del typeMismatch
},
password:{
    valueMissing:"Este campo constrasena no puede estar vacio",
    patternMismatch:"Al menos 8 caracteres, maximo 12, debe contener una letra mayusculas, un numero y no puede contener caracteres espaciales",
},
nacimiento:{
    valueMissing:"Este campo no puede estar vacio",
    customError:"Debes tener al menos 18 años de edad",//Un error personalizado
},
numero:{
    valueMissing:"Este campo no puede estar vacio",//Cuando no pones ningun valor
    patternMismatch:"El formato requerido es XXXXXXXXXX 10 numeros",//Si el pattern de html no se cumple salta este error

},
direccion:{
    valueMissing:"Este campo no puede estar vacio",
    patternMismatch:"La direccion debe contener entre 10 a 40 caracteres",

},
ciudad:{
    valueMissing:"Este campo no puede estar vacio",
    patternMismatch:"La ciudad debe contener entre 10 a 40 caracteres",

},
estado:{
    valueMissing:"Este campo no puede estar vacio",
    patternMismatch:"La estado debe contener entre 10 a 40 caracteres",

}
}
const validadores={
    nacimiento: (input)=>validarNacimiento(input),
};
function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje="";
    tipoDeErrores.forEach((error) =>{//Recorre la lista tipoDeErrores devolviendo el valor de en la variable(error)
        if(input.validity[error]){//comprueba que la validacion del input sea igual al error endado caso de que si se convierte en un true y se ejecuta 
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje=mensajesDeError[tipoDeInput][error];//mensajesDeError[nombre][valueMissing] El tipoDeInput lo arrastramos desde el data-tipo del html
        }
    });
    return mensaje;
}
function validarNacimiento(input){
    const fechaCliente=new Date(input.value);
    let mensaje='';
    if(!mayorDeEdad(fechaCliente)){//Valida la edad si es si nos devuelve false de mayor de edad nos lo convierte a true y se ejecuta la condicion  
        mensaje="Debes tener al menos 18 años de edad";
    }
    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha){
    const fechaActual=new Date();
    const diferenciaFechas=new Date(
        fecha.getUTCFullYear()+18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    ); 
    return diferenciaFechas<=fechaActual;//Si la suma de la fecha de nacimiento + 18 es menor o igual a fecha actual es mayor de edad si no y es  mayor a la fecha actual es menor de edad

}