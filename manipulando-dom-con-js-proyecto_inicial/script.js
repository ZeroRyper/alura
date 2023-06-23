const btn=document.querySelector('[data-form-btn]');

const createTask=(evento)=>{
    evento.preventDefault();
    const input=document.querySelector('[data-form-input]');
    const value=input.value;
    const list=document.querySelector('[data-list]')
    const task=document.createElement('li');//Crea un elemento li
    task.classList.add('card');//Agrega una clase al varible de task
    input.value=""//Limpia los datos del input 
    const content=`     
    <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`
  task.innerHTML=content;//innerHTML nos ayuda agragar codigo html

  list.appendChild(task);//Agrega al list en este caso al ul card-list 
  console.log(content)

};
btn.addEventListener('click',createTask);