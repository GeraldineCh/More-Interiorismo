var draggableDiv = document.getElementsByClassName("draggable-div");
function setAllClass(className, newClass) {
  for (var i = 0; i < draggableDiv.length; i++) {
    className[i].setAttribute("class", newClass);
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
  var draggedDiv = document.getElementById(data);
  draggedDiv.setAttribute("class","active");
});
//Remove visibility of shown picure
var drop = document.getElementById("drop-div");
drop.addEventListener("drop", function(ev){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  var draggedDiv = document.getElementById(data);
  draggedDiv.setAttribute("class", "draggable-div");
}, false);
//Drop picture into div
drop.addEventListener("dragover", function(ev) {
  ev.preventDefault();
}, false);

document.getElementById("reset-gallery").addEventListener("click", function(e) {
  location.reload();
})
