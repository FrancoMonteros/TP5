/*2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece 
la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, 
permitiendo ingresar las propiedades mediante un formulario, también agregar los botones 
“mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.*/

let inputNombre = document.getElementById('inputNombre');
let inputEdad = document.getElementById('inputEdad');
let inputSexo = document.getElementById('genero');
let inputPeso = document.getElementById('inputPeso');
let inputDNI = document.getElementById('inputDNI');
let inputAltura = document.getElementById('inputAltura');
let inputNacimiento = document.getElementById('inputNacimiento');
let form = document.getElementById('form');
let mayor = document.getElementById('mayorEdades');
let generaciones = document.getElementById('generacion');
class Personas {
    constructor(nombre, edad, sexo, peso, dni, altura, aniodeNacimiento) {
        this.nombre = nombre,
            this.edad = edad,
            this.dni = dni,
            this.sexo = sexo,
            this.peso = peso,
            this.altura = altura,
            this.nacimiento = aniodeNacimiento
    }
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    get getNombre() {
        return this.nombre;
    }
    set setEdad(edad) {
        this.edad = edad;
    }
    get getEdad() {
        return this.edad;
    }
    set setSexo(sexo) {
        this.sexo = sexo;
    }
    get getSexo() {
        return this.sexo;
    }
    set setPeso(peso) {
        this.peso = peso;
    }
    get getPeso() {
        return this.peso;
    }
    set setDni(dni) {
        this.dni = dni;
    }
    get getDni() {
        return this.dni;
    }
    set setAltura(altura) {
        this.altura = altura;
    }
    get getAltura() {
        return this.altura;
    }
    set setNacimiento(nacimiento) {
        this.nacimiento = nacimiento;

    }
    get getNacimiento() {
        return this.nacimiento;
    }

    mostrarGeneracion() {
        if (this.nacimiento < 1948 && this.nacimiento > 1930) {
            return 'Generacion: "Silent Generation", Rango Caracteristico: "Austeridad '
        } else if (this.nacimiento < 1968 && this.nacimiento > 1949) {
            return ('Generacion: "Baby Boom", Rango Caracteristicos: "Ambicion"');
        } else if (this.nacimiento < 1980 && this.nacimiento > 1969) {
            return ('Generacion: "Generacion X", Rengo Caracteristicos:"Obsesion por el exito"');
        } else if (this.nacimiento < 1993 && this.nacimiento > 1981) {
            return ('Generacion: "Generacion Y Millennials", Rango caracteristicos: "Frustracion"');
        } else if (this.nacimiento < 2010 && this.nacimiento > 1994) {
            return ('Generacion: "Generacion Z", Rango caracteristicos: "irreverencia"');
        } else {
            return 'No se definio la generacion.';
        }
    }
    esMayorDeEdad() {
        if (this.edad > 18) {
            return "es mayor de edad";
        } else {
            return "es menor de edad";
        }
    }
    mostrarDatos() {
        return `<br>Nombre: ${this.nombre}<br> Edad: ${this.edad}<br> Sexo: ${this.sexo}<br> Peso: ${this.peso}<br> Altura: ${this.altura}<br> año de nacimiento: ${this.nacimiento}<br> DNI: ${this.dni}`;
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaPersona = new Personas(
        inputNombre.value,
        inputEdad.value,
        inputSexo.value,
        inputPeso.value,
        inputDNI.value,
        inputAltura.value,
        inputNacimiento.value,
    );
    console.log(nuevaPersona);
 
    form.reset();
    mayor.addEventListener("click", () =>
      mostrarDatosPersona(nuevaPersona)
    );
}
form.addEventListener("submit", handleSubmit);

function mostrarDatosPersona(persona) {
    let panelDatos = document.querySelector("#detalle");
    panelDatos.innerHTML = persona.esMayorDeEdad();
}