var modal = document.getElementById("modal");
var modalImg = document.getElementsByClassName("modal-img");
var imgs = document.getElementsByClassName("img-gallery");

//Remove all show classes
function removeAllShow() {
  for (var i = 0; i < modalImg.length; i++) {
    modalImg[i].classList.remove("show");
  }
}
//Show modal when any photo is clicked

for (var j=0; j<imgs.length; j++) {
  imgs[j].addEventListener("click", function(e) {
    modal.classList.remove("hidden");
    modal.classList.add("show-modal");
    document.getElementsByTagName("body")[0].classList.toggle("overflow-hidden");
    var currImg = e.target.id;
    removeAllShow();
    document.getElementById(currImg +"-modal").classList.add("show");
  })
}

//Close modal when close button is clicked
var close = document.getElementById("close");
close.addEventListener("click", function(e) {
  document.getElementsByTagName("body")[0].classList.toggle("overflow-hidden");
  modal.classList.remove("show-modal");
  modal.classList.add("hidden");
})
