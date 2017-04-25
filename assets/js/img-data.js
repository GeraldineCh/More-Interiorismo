
var images = [{src:"assets/img/renders/deco01.jpg"},
              {src:"assets/img/renders/deco02.jpg"},
              {src:"assets/img/renders/deco03.jpg"},
              {src:"assets/img/renders/deco04.jpg"},
              {src:"assets/img/renders/deco05.jpg"},
              {src:"assets/img/renders/deco06.jpg"},
              {src:"assets/img/renders/deco07.jpg"},
              {src:"assets/img/renders/deco07.jpg"}
            ];

var draggableDiv = document.getElementsByClassName("draggable-div");
for (var i = 0; i < draggableDiv.length; i++) {
  var parent = draggableDiv[i];
  console.log(parent);
  parent.setAttribute("src", images[i].src);
}

/*
var x = document.getElementById("img1");
x.setAttribute("src", "assets/img/renders/deco01.jpg");
*/
