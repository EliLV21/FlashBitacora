
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});



var modalTexto = document.getElementById("modal1");
var textoBoton = document.getElementById("texto");

modalTexto.addEventListener("click",textoMostrar);

function textoMostrar(){
  modalTexto.style.display = block;
}
