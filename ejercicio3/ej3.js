/*3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea 
y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista 
debe poder ser eliminado con un botón creado para ese fin. */

let tareas = [];
let listaTareas = document.querySelector("#listaTareas");
let formTarea = document.querySelector("#formTareas");
formTarea.addEventListener("submit", agregarTarea);

function agregarTarea(e) {
  e.preventDefault();
  tareas.push(document.querySelector("#inpuTareas").value);
  crearItem(document.querySelector("#inpuTareas").value, tareas.length - 1);
  formTarea.reset();
}

function crearItem(tarea, indice) {
  listaTareas.innerHTML += `<li class="list-group-item d-flex justify-content-between"><p class="m-0">${tarea}</p>
    <button class="btn btn-danger " onclick="eliminarTarea(${indice})"><i class="bi bi-clipboard-minus-fill">eliminar</i></button></li>`;
}

function eliminarTarea(indice) {
  tareas.splice(indice, 1);
  listaTareas.innerHTML = "";
  tareas.forEach((tarea, posicion) => crearItem(tarea, posicion));
}