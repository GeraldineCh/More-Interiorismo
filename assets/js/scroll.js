var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll < 540){
     document.getElementsByClassName("logo")[0].classList.remove("black");
     document.getElementsByClassName("logo")[0].classList.add("white");
     document.getElementsByTagName("h2")[0].classList.remove("top-line");
     document.getElementsByTagName("h2")[0].classList.add("top-line-hidden-black");
   }
   if (currentScroll > 300) {
     document.getElementById("about").classList.remove("opacity");
   }
   if (currentScroll > 500) {
     document.getElementsByTagName("h2")[0].classList.add("top-line");
     document.getElementsByTagName("h2")[0].classList.remove("top-line-hidden-black");
   }
   if ((currentScroll < 1000) && (currentScroll > 300)){
     document.getElementsByClassName("logo")[0].classList.remove("white");
     document.getElementsByClassName("logo")[0].classList.add("black");
     document.getElementsByTagName("h2")[1].classList.remove("top-line");
     document.getElementsByTagName("h2")[1].classList.add("top-line-hidden");
   }
   if (currentScroll > 900){
     document.getElementById("gallery").classList.remove("opacity");
   }
   if (currentScroll > 1000){
     document.getElementsByClassName("logo")[0].classList.remove("black");
     document.getElementsByClassName("logo")[0].classList.add("white");
     document.getElementsByTagName("h2")[0].classList.remove("top-line");
     document.getElementsByTagName("h2")[0].classList.add("top-line-hidden-black");
     document.getElementsByTagName("h2")[1].classList.add("top-line");
     document.getElementsByTagName("h2")[1].classList.remove("top-line-hidden");
     document.getElementsByTagName("h2")[2].classList.remove("top-line-black");
     document.getElementsByTagName("h2")[2].classList.add("top-line-hidden-black");
   }
   if (currentScroll > 1600){
     document.getElementsByTagName("h2")[2].classList.add("top-line-black");
     document.getElementsByTagName("h2")[2].classList.remove("top-line-hidden-black");
   }
   if (currentScroll > 1600) {
     document.getElementById("contact").classList.remove("opacity");
   }
   if (currentScroll > 1700) {
     document.getElementsByClassName("logo")[0].classList.remove("white");
     document.getElementsByClassName("logo")[0].classList.add("black");
     document.getElementsByTagName("h2")[1].classList.remove("top-line");
     document.getElementsByTagName("h2")[1].classList.add("top-line-hidden");

   }
   lastScrollTop = currentScroll;
   console.log(currentScroll);
}, false);
