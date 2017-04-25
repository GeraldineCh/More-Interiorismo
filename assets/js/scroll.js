var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById("about").classList.remove("opacity");
   }
   lastScrollTop = currentScroll;
}, false);
