var draggableDiv = document.getElementsByClassName("draggable-div");

//Empezando a arrastrar imagen
document.addEventListener("dragstart", function(ev){
    ev.dataTransfer.setData("text", ev.target.id);
    var data = ev.dataTransfer.getData("text");
}, false);

//Arrastrando imagen y mostrandándola ampliada
document.addEventListener("drag", function(ev) {
  var data = ev.target.id;
  var draggedDiv = document.getElementById(data);
  draggedDiv.setAttribute("class","active");
});

//Quitar visibilidad de imagen ampliada al soltar en lugar señalado
var drop = document.getElementById("drop-div");
drop.addEventListener("drop", function(ev){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  var draggedDiv = document.getElementById(data);
  draggedDiv.setAttribute("class", "draggable-div");
}, false);

//Al acabar de arrastrar
drop.addEventListener("dragover", function(ev) {
  ev.preventDefault();
}, false);

//Reiniciar vista
document.getElementById("reset-gallery").addEventListener("click", function(e) {
  location.reload();
})
