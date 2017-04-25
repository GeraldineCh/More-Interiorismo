var nombre = document.getElementById("nombre");
var mensaje= document.getElementById("mensaje");
var soloLetras = function(elemento){
      var codigoTecla = elemento.keyCode;
      //console.log(codigoTecla);
      if((codigoTecla >=97 && codigoTecla <= 122) || (codigoTecla >= 65 && codigoTecla <=90) || codigoTecla == 164){
        return true;
      } else {
        this.nextElementSibling.setAttribute("style", "display:block");
        this.nextElementSibling.innerText="* Debe colocar solo letras.";
      }
    }
nombre.onkeypress=soloLetras;
mensaje.onkeypress=soloLetras;

var inputs = document.getElementsByClassName("input-registro");

    //el inputs[0] es porque solo sale el mensaje de ue llene ese campo en la primera opcion
var validacionInput= function(elemento){
        if (this.value.trim().length==0){
        this.value="";
        this.nextElementSibling.nextElementSibling.innerText="*Este campo es obligatorio";
      }
     else {
            this.nextElementSibling.nextElementSibling.innerText="";
      }
      var datoCorrecto = this.value.charAt(0).toUpperCase()+this.value.substring(1).toLowerCase();
      this.value=datoCorrecto;
      //console.log(this.value);
  }
  for (var i=0; i<inputs.length; i++){
  inputs[i].onblur=validacionInput;
  }

//var mensaje = document.getElementById("mensaje");


var boton = document.getElementById("registro");

boton.addEventListener("click",function(){
  var nombre = document.getElementById("nombre").value;
  var email= document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;
  function newsletter(nombre, email, mensaje){
    this.nombre = nombre;
    this.email = email;
    this.mensaje = mensaje;
  }
  var pclientes =[];
  var cliente = new newsletter(nombre, email, mensaje);
  //console.log(new newsletter(nombre, email, mensaje));
  localStorage.setItem("nuevoPaciente",JSON.stringify(new newsletter(nombre, email, mensaje)));
  document.getElementById("formula").reset();
});
