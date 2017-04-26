var images = [{src:"assets/img/renders/deco01.jpg"},
              {src:"assets/img/renders/deco02.jpg"},
              {src:"assets/img/renders/deco14.jpg"},
              {src:"assets/img/renders/deco04.jpg"},
              {src:"assets/img/renders/deco05.jpg"},
              {src:"assets/img/renders/deco06.jpg"},
              {src:"assets/img/renders/deco15.jpg"},
              {src:"assets/img/renders/deco08.jpg"},
              {src:"assets/img/renders/deco09.jpg"},
              {src:"assets/img/renders/deco10.jpg"},
              {src:"assets/img/renders/deco11.jpg"}
            ];

var draggableDiv = document.getElementsByClassName("draggable-div");
for (var i = 0; i < draggableDiv.length; i++) {
  var parent = draggableDiv[i];
  parent.setAttribute("src", images[i].src);
}
