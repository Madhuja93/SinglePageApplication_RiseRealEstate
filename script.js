function showMenu() {
  var navLinks = document.getElementById("navLinks");
  navLinks.style.right = "0";
}
function hideMenu() {
  var navLinks = document.getElementById("navLinks");
  navLinks.style.right = "-200px";
}

/*-----------------------------------------Banner slider--------------------------*/

var banner = document.getElementById("banner");

var images = new Array(
  "images/bg.jpg",
  "images/bg1.jpg",
  "images/bg2.jpg",
  "images/bg3.jpg",
  "images/bg4.jpg",
  "images/bg5.jpg",
  "images/bg6.jpg"
);

var len = images.length;
var i = 0;

function slider() {
  if (i > len - 1) {
    i = 0;
  }

  banner.src = images[i];
  i++;
  setTimeout("slider()", 3000);
}

/*--------------------------------------Register toggle button------------------------*/

function signin() {
  var x = document.getElementById("signin");
  var y = document.getElementById("signup");
  var z = document.getElementById("btn");

  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function signup() {
  var x = document.getElementById("signin");
  var y = document.getElementById("signup");
  var z = document.getElementById("btn");
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}

/*------------------------------------Calling pages------------------------------------*/
function callRegistration() {
  var pageRef = $(this).attr("href");
  callPage("register.html", "#about");
}

function callPrivacyPolicy() {
  var pageRef = $(this).attr("href");
  callPage("privacypolicy.html", "#content");
}

function callPage(pageRefInput, content) {
  $.ajax({
    url: pageRefInput,
    type: "GET",
    dataType: "text",
    success: function (response) {
      $(content).html(response);
    },
  });
}

function callReset() {
  $("#about").append(function () {
    var pageRef = $(this).attr("href");
    callPage("about.html", "#about");
  });

  $("#content").empty();
}

$(document).ready(function () {
  $("#about").append(function () {
    var pageRef = $(this).attr("href");
    callPage("about.html", "#about");
  });
});
