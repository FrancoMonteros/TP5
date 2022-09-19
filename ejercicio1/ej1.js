const botonComenzar = document.getElementById('comenzar');
const input = document.getElementById('input_number');
const botonEnviar = document.getElementById('enviar');

let numero_aleatorio;
let numero_usuario;


botonComenzar.addEventListener('click', comenzarJuego);
input.addEventListener('change', setInput)
botonEnviar.addEventListener('click', comparacion);

function comenzarJuego() {
    numero_aleatorio = Math.floor(Math.random() * 10)
    console.log(numero_aleatorio);

}
function setInput(e) {
    console.log(e.target.value);
    numero_usuario = e.target.value
}
function comparacion() {
    let elemento = document.createElement('h1')
    if (numero_usuario == numero_aleatorio) {
        elemento.innerHTML = 'ganaste'
    } else if (numero_usuario > numero_aleatorio) {
        elemento.innerHTML = 'casi casi pero no'
    } else if (numero_usuario < numero_aleatorio) {
        elemento.innerHTML = 'no no, sigue intentando'
    }
    document.body.appendChild(elemento)
}
