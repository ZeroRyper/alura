const checkComplete=()=>{
    const i=document.createElement('i');
    i.classList.add('far','fa-check-square','icon');
    i.addEventListener('click',completeTask);

    return i;
}

//Immediately invoked function expression IIFE
const completeTask= (event)=>{
    const element=event.target;//Encontrar el objetivo del evento utilizando la propiedad target
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
    //El método toggle permite cada vez que se ejecute cambiar de estado la visibilidad del elemento HTML, es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible.
};

export default checkComplete;
