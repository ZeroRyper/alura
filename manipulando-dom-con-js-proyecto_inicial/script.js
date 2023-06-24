import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

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
    const taskContent=document.createElement('div') ;
    const titleTask=document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText=value;
    taskContent.appendChild(checkComplete());//Metemos checkComplete en taskContent
    taskContent.appendChild(titleTask);//Lo metemos en taskContent

    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);//Agrega al ul card-list 
//     insertBefore(padre, hijo): Coloca un nodo antes del otro
//     replaceChild(elemento1, elemento2): Sustituye el nodo del elemento 1 por el nodo del elemento 2
//     removeChild(elemento): Remueve un nodo del árbol

};
btn.addEventListener('click',createTask);