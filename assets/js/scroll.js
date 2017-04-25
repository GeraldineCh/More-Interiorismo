var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById("about").classList.remove("opacity");
   }
   if (currentScroll > 310) {
     document.getElementById("gallery").classList.remove("opacity");
   }
   if (currentScroll > 910) {
     document.getElementById("contact").classList.remove("opacity");
   }
   lastScrollTop = currentScroll;
   console.log(window.pageYOffset);
}, false);
