
/**Se realiza con dos metodos distintos: */


// funcion encriptado
/**
 * 1. se convierte el texto en un array con split()
 * 2.con un switch dentro de un for se recorre el array y se reemplaza en cada caso evaluado su respectivo valor
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

    // se borra msj de error en 2 segundos
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

  }else {
    // muestra msj de error
    let error = document.querySelector(".error")
    error.innerHTML = "No debe contener caracteres especiales ni acentos"

    let clear_er =()=>{error.innerHTML=""}

    // se borra msj de error en 2 segundos
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
  // clear mensaje en 2 segundos
  setTimeout(msj_clear,2000)

}

// funcion limpieza de campos
let limpiar=()=>{
  let box= document.querySelector(".box")
  // input type texto
  let input_texto = document.querySelector("#text")
  
  let error = document.querySelector(".error")
  //reemplaza por cadena vacia
  // para acceder al contenido de texto
  box.textContent = "";
  // 
  input_texto.value= ""; /* propiedad específica para los elementos de entrada de formulario.*/
  error.textContent="";
  console.log("contenedor box funcionando");
}


/**
 * cambios:
 * se realiza cambios en estilos
 * se agrega funcion limpiar() que reemplaza en input,caja de texto encriptado/ desencriptado y mensajes de error por cadenas de texto vacia.
 * se limpia msjs de error con setTimeout()
 * se corrige inconsistencias de estilos
 * 
 */



