var nombre = document.getElementById("name");
var email = document.getElementById("input-email");

//Validando Nombre
var soloLetras = function(elemento) {
  var letraAscii = elemento.keyCode;
  if((letraAscii >= 97 && letraAscii <= 122) || (letraAscii >= 65 && letraAscii <= 90) || (letraAscii >= 164 && letraAscii <=165) || letraAscii == 32){
      return true;
      this.nextElementSibling.setAttribute("style", "display:none");
  } else {
    return false;
    this.nextElementSibling.setAttribute("style", "display:block");
    this.nextElementSibling.innerText="* Must be only letters.";
  }
}
nombre.onkeypress = soloLetras;

//Validando emal
var correovalido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function validandomail(elemento) {
  if (correovalido.test(email.value)) {
        this.nextElementSibling.setAttribute("style", "display:none");
  } else {
    this.nextElementSibling.setAttribute("style", "display:block");
    this.nextElementSibling.innerText="* Must write a validate email.";
  }
}
email.onkeyup = validandomail;
email.onblur = validandomail;

//Validando que se ingrese dato
var validateForm = function(elemento) {
  if (this.value.trim().length == 0) {
    this.value = "";
    this.nextElementSibling.setAttribute("style", "display:block");
    this.nextElementSibling.innerText="* Obligatory field";
  }
  if (this.value.trim().length!=0) {
    this.nextElementSibling.setAttribute("style", "display:none");
  }
  var datoCorrecto = this.value.charAt(0).toUpperCase() + this.value.substring(1).toLowerCase();
  this.value = datoCorrecto;
}
nombre.onblur = validateForm;

//Limpiar formulario en submit
document.getElementById("login").addEventListener("click", function() {
  document.getElementById("formulario").reset();
})
