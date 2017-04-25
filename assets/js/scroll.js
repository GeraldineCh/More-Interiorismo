var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById("about").classList.remove("opacity");
   }
   if (currentScroll < 1000){
     document.getElementsByClassName("logo")[0].classList.remove("black");
     document.getElementsByClassName("logo")[0].classList.add("white");
   }
   if (currentScroll > 1000) {
     document.getElementsByClassName("logo")[0].classList.remove("white");
     document.getElementsByClassName("logo")[0].classList.add("black");
     document.getElementById("gallery").classList.remove("opacity");
   }
   if (currentScroll > 1700) {
     document.getElementById("contact").classList.remove("opacity");
     document.getElementsByClassName("logo")[0].classList.remove("black");
     document.getElementsByClassName("logo")[0].classList.add("white");
   }
   lastScrollTop = currentScroll;
}, false);
