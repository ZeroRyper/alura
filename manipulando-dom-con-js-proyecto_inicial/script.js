(()=>{
const btn=document.querySelector('[data-form-btn]');

const createTask=(evento)=>{
    evento.preventDefault();
    const input=document.querySelector('[data-form-input]');
    const value=input.value;
    const list=document.querySelector('[data-list]')
    const task=document.createElement('li');//Crea un elemento li
    task.classList.add('card');//Agrega una clase al varible de task
    input.value=""//Limpia los datos del input

    //backticks
    const taskContent=document.createElement("div") ;
    const titleTask=document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText=value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    const content=`     
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.appendChild(taskContent);//innerHTML nos ayuda agragar codigo html
    list.appendChild(task);//Agrega al list en este caso al ul card-list 
//     insertBefore(padre, hijo): Coloca un nodo antes del otro
//     replaceChild(elemento1, elemento2): Sustituye el nodo del elemento 1 por el nodo del elemento 2
//     removeChild(elemento): Remueve un nodo del árbol

};
btn.addEventListener('click',createTask);

const checkComplete=()=>{
    const i=document.createElement('i');
    i.classList.add('far','fa-check-square','icon');
    i.addEventListener('click',completeTask);

    return i;
}
//Immediately invoked function expression IIFE
const completeTask= (event)=>{
    const element=event.target;//Encontrar el objetivo del evento utilizando la propiedad target
    element.classList.toggle('fas')
    element.classList.toggle('completeIcon')
    element.classList.toggle('far')
    //El método toggle permite cada vez que se ejecute cambiar de estado la visibilidad del elemento HTML, es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible.
}
})()