/**
 * Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre las dos opciones.
El resultado debe ser mostrado en la pantalla.
Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.



/**Se realiza con dos metodos distintos: */


// funcion encriptado
/**
 * 1. se convierte el texto en un array con split()
 * 2.con un switch dentro de un for se recorre el array y se reemplaza en casa caso evaluado su respectivo valor
 * 3.se convierte nuevamente el array en cadena de caracteres con join()
 */

const encriptador = () => {
  let text = document.getElementById("text").value;
 // uso de match() y expresion regular que identifica caracteres especiales y acentos
  let especiales = text.match(/[^\w\s.]/g);
  //console.log(especiales);

  // si especiales es null, match() no encontro caracteres especiales ni acentos
  if (especiales === null) {
    let toArray = text.toLowerCase().split("");
    let result = document.querySelector(".box");

    for (let i = 0; i < toArray.length; i++) {
      switch (toArray[i]) {
        case "a":
          toArray[i] = "ai";
          break;
        case "e":
          toArray[i] = "enter";
          break;
        case "i":
          toArray[i] = "imes";
          break;
        case "o":
          toArray[i] = "ober";
          break;
        case "u":
          toArray[i] = "ufat";
          break;
      }
    }
    let toText = toArray.join("");
    // console.log(toText);

    //se escribe el resultado
    result.innerHTML = toText;
  } else {
    // muestra msj de error
    let error = document.querySelector(".error")
    error.innerHTML = "No debe contener caracteres especiales ni acentos"

    let clear_er =()=>{error.innerHTML=""}

    setTimeout(clear_er,2000)

  }
};

//funcion desencriptado
/**
 * hecho con funciones regulares y el metodo replace()
 */

const desencriptado = () => {
  let text = document.getElementById("text").value;
  let descript = text.toLowerCase();
  let especiales = text.match(/[^\w\s.]/g);
  if (especiales === null) {
    let result = document.querySelector(".box");
    descript = descript
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    //console.log(descript);

    // se escribe el resultado:
    result.innerHTML = descript;

   

  } else {

    // msj de error
    var error = document.querySelector(".error")
    error.innerHTML = "No debe contener caracteres especiales ni acentos"
    let clear_er =()=>{error.innerHTML=""}

    setTimeout(clear_er,2000)

  }
};

// copia de texto
let copiar = ()=>{
  let codigoAcopiar = document.querySelector(".box")

  let seleccion = document.createRange()

  seleccion.selectNodeContents(codigoAcopiar)
  window.getSelection().removeAllRanges()
  window.getSelection().addRange(seleccion)
  let res = document.execCommand("copy")
  window.getSelection().removeRange(seleccion)

  // mensaje de que el texto fue copiado
  var error = document.querySelector(".error")
   error.innerHTML = "Texto copiado con exito!"

  let msj_clear =()=>{error.innerHTML = ""}
  // clear mensaje
  setTimeout(msj_clear,2000)

}

// limpieza de campos
let limpiar=()=>{
  let box= document.querySelector(".box")
  // input type texto
  let input_texto = document.querySelector("#text")
  // span error (mensaje de error)
  let error = document.querySelector(".error")

  //reemplaza por cadena vacia

  // para acceder al contenido de texto
  box.textContent = "";
  // propiedad específica para los elementos de entrada de formulario.
  input_texto.value= "";
  error.textContent="";

  console.log("contenedor box funcionando");
}


/**
 * cambios:
 * se realiza cambios en estilos
 * se agrega funcion limpiar() que reemplaza en input,caja de texto encriptado/ desencriptado y mensajes de error por cadenas de texto vacia.
 * se limpia msjs de error con setTimeout()
 */



