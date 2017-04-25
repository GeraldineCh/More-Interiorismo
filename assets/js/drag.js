var draggableDiv = document.getElementsByClassName("draggable-div");
function removeAllClass() {
  for (var i = 0; i < draggableDiv.length; i++) {
    draggableDiv[i].classList.remove("active");
  }
}
//Drag & Drop
document.addEventListener("dragstart", function(ev){
    ev.dataTransfer.setData("text", ev.target.id);
    var data = ev.dataTransfer.getData("text");
}, false);

document.addEventListener("drag", function(ev) {
  var data = ev.target.id;
  console.log(data);
  var x = document.getElementById(data);
  x.classList.add("active");
});

document.addEventListener("drop", function(ev){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  removeAllClass()
}, false);

var drop = document.getElementById("drop-div");
drop.addEventListener("dragover", function(event) {
  event.preventDefault();
}, false);
