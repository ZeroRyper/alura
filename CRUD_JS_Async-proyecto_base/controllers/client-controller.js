import { clientServices } from "../service/client-service.js";
const crearNuevaLinea=(nombre,email,id)=>{
    const linea = document.createElement("tr");
    //Ojo para que nos muestre la informacion que queremos editar
    const contenido=`
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?id=${id}" 
            class="simple-button simple-button--edit"
            
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button" id="${id}"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>`;
    linea.innerHTML=contenido;
    const btn = linea.querySelector("button");
btn.addEventListener("click", async () => {
  try {
    const btid=btn.id;
    const id = await clientServices.eliminarCliente(btid);
    if (id) {
      console.log(id);
    } else {
      throw new Error();
    }
  } catch (error) {
    window.location.href = "/CRUD_JS_Async-proyecto_base/screens/error.html";
  }
});
    return linea;

}
const table=document.querySelector("[data-table]")

clientServices.listaClientes().then((data)=>{
    data.forEach(({nombre,email,id})=>{
        const nuevalinea=crearNuevaLinea(nombre,email,id);
        table.appendChild(nuevalinea);
    });
})
.catch((error) => alert('Ocurrio un error'));