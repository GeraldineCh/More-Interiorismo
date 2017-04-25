var drop = document.getElementById("drop-div");
drop.addEventListener("dragover", function(event) {
    event.preventDefault();
}, false);

document.addEventListener("dragstart", function(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}, false);

document.addEventListener("drop", function(ev){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  alert(data);
}, false);
