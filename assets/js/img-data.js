
var images = [{src:"assets/img/renders/deco01.jpg"},
              {src:"assets/img/renders/deco02.jpg"},
              {src:"assets/img/renders/deco03.jpg"},
              {src:"assets/img/renders/deco04.jpg"},
              {src:"assets/img/renders/deco05.jpg"},
              {src:"assets/img/renders/deco06.jpg"},
              {src:"assets/img/renders/deco07.jpg"},
              {src:"assets/img/renders/deco08.jpg"}
            ];

var draggableDiv = document.getElementsByClassName("draggable-div");
for (var i = 0; i < draggableDiv.length; i++) {
  var parent = draggableDiv[i];
  console.log(parent);
  parent.setAttribute("src", images[i].src);
}
/*
var mosaico = document.getElementsByClassName("mosaico");
for (var i = 0; i < (draggableDiv.length/4)+1; i++) {

  var parentTop = document.createElement("div");
  parentTop.classList.add("parent-top");
  mosaico.appendChild(parentTop)
  var img
  var parent = draggableDiv[i];
  console.log(parent);
  parent.setAttribute("src", images[i].src);
}
*/
