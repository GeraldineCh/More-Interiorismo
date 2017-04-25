var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll < 540){
     document.getElementsByClassName("logo")[0].classList.remove("black");
     document.getElementsByClassName("logo")[0].classList.add("white");
   }
   if (currentScroll > 300) {
     document.getElementById("about").classList.remove("opacity");
   }
   if (currentScroll > 1000){
     document.getElementsByClassName("logo")[0].classList.remove("black");
     document.getElementsByClassName("logo")[0].classList.add("white");
   }
   if ((currentScroll < 1000) &&  (currentScroll > 300)){
     document.getElementsByClassName("logo")[0].classList.remove("white");
     document.getElementsByClassName("logo")[0].classList.add("black");
   }
   if (currentScroll > 900){
     document.getElementById("gallery").classList.remove("opacity");
   }
   if (currentScroll > 1700) {
     document.getElementsByClassName("logo")[0].classList.remove("white");
     document.getElementsByClassName("logo")[0].classList.add("black");
   }
   if (currentScroll > 1600) {
     document.getElementById("contact").classList.remove("opacity");
   }console.log(currentScroll);
   lastScrollTop = currentScroll;
}, false);
