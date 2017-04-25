
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
  parent.setAttribute("src", images[i].src);
}

function uploadModal(path, id) {
  var docFragment = document.createDocumentFragment();
  var modalContent = document.getElementsByClassName("modal-content")[0];
  var img = document.createElement("img");
  img.setAttribute("src", path);
  img.classList.add("modal-img");
  img.setAttribute("id", "img"+ id +"-modal");
  docFragment.appendChild(img);

  modalContent.appendChild(docFragment);
}

for (var i = 0; i < draggableDiv.length; i++) {
  uploadModal(images[i].src, i);
}
