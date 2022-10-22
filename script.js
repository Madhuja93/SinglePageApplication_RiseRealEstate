function showMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0";
  }
  function hideMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "-200px";
  }

  /*var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
  }); */

const li=document.querySelectorAll("links");
const sec=document.querySelectorAll("section");

function activeMenu(){
  let len=sec.length;
  while(--len && window.scrollY+ 97 < sec[len].offsetTop){
    li.forEach(Itx => Itx.classList.remove("active"));
    li[len].classList.add("active");
  }
  activeMenu();
  window.addEventListener("scrol", activeMenu);
}