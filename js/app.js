console.log('☾ ☾ ☾ ☾ ☾ ☾ ☾ ☾ ☾ ☾ ');
console.log("KONMARI");
console.log('☾ ☾ ☾ ☾ ☾ ☾ ☾ ☾ ☾ ☾ ');

// var jess ="miNombreMioDeMi";

// Metodo == a funciones
/* 
instruciones para llegar a algo
manera especifica de llegar a unfin
conjunto de pasos a seguir
secuencia de pasos en un orden

serie de pasos para un objetivo concreto
de forma practica metodo es un bloque de codigo que
da como resultado un objetivo
*/

// function saludar(){
// alert("Bienvenidas");
// }

// var edad = 30;

// prompt("Ingresa tu edad");

// console.log("La edad que ingreso es de:" + edad);
// alert("☾☾☾☾☾Bienvenidas mujeres emprendedoras☽☽☽☽☽");

/* var nombre = prompt("Ingresa tu nombre :");

console.log("Bienvenido" , nombre);

var saludo = document.getElementById("saludoElementoEnHTML");

var saludoEnPantalla = "Bienvenida" + nombre;

console.log(saludoEnPantalla);

saludo.innerText = saludoEnPantalla; */

// Swal.fire("☾☾Bienvenidas mujeres emprendedoras☽☽")



/* Sweet alert preguntas */

function saludar() {
    // forma nativa
    // alert("BIENVENIDAS MUJERES EMPRENDEDORAS!!!")
    // forma customizada mas estilo
    Swal.fire(
      {
        position: 'top-end',
        icon: 'success',
        title: 'BIENVENIDAS MUJERES EMPRENDEDORAS!!!',
        showConfirmButton: false,
        timer: 3000
      })
}

 /* Swal.mixin({
    // Caja de texto 
    input: 'text',
    confirmButtonText: 'Next &rarr;',
    showCancelButton: false,
    // Numero de preguntas que deseas paoner
    progressSteps: ['1']
  }).queue([
    {
    // Esta definido el texto 
      title: 'Ingresa tu nombre'
    }
 

]).then((result) => {
    if (result.value) {
      const nombre = result.value

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Bienvenida',
        text: nombre,
        showConfirmButton: false,
        timer: 1500
      });
      var saludo = document.getElementById("saludoElementoEnHTML");
      var saludoEnPantalla = "Bienvenida " + nombre;
      saludo.innerText = saludoEnPantalla;
    }
  })  */
function info() {
/*  console.log("Entrando a la function");

    var res = confirm("¿Deseas saber acerca de autonomia economica de las mujeres?");

    if (res) {
        alert("juenskilak")
    } */

    Swal.fire({
        title: '¿Deseas saber acerca de autonomia economica de las mujeres?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#5A4666',
        cancelButtonColor: '#788292',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
              position: 'top-start',
              icon: 'sucess',
              text: 'hdidd',
              showCancelButton: false
          })
        }
      })
}