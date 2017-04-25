var draggableDiv = document.getElementsByClassName("draggable-div");
function removeAllClass(className) {
  for (var i = 0; i < draggableDiv.length; i++) {
    className[i].classList.remove("active");
  }
}
//Start to drag a picture
document.addEventListener("dragstart", function(ev){
    ev.dataTransfer.setData("text", ev.target.id);
    var data = ev.dataTransfer.getData("text");
}, false);
//Dragging and adding acive class to show picture
document.addEventListener("drag", function(ev) {
  var data = ev.target.id;
  console.log(data);
  var draggedDiv = document.getElementById(data);
  draggedDiv.setAttribute("class","active");
});
//Remove visibility of shown picure
document.addEventListener("drop", function(ev){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  var draggedDiv = document.getElementById(data);
  draggedDiv.setAttribute("class", "draggable-div");
}, false);
//Drop picture into div
var drop = document.getElementById("drop-div");
drop.addEventListener("dragover", function(event) {
  event.preventDefault();
}, false);
