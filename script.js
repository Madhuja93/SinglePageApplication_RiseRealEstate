function showMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0";
  }
  function hideMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "-200px";
  }
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
  });