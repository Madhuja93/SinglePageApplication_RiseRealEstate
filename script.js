function showMenu() {
  var navLinks = document.getElementById("navLinks");
  navLinks.style.right = "0";
}
function hideMenu() {
  var navLinks = document.getElementById("navLinks");
  navLinks.style.right = "-200px";
}

/*-----------------------------------------Banner slider--------------------------*/


var i = 1;

function slider() {

var banner = document.getElementById("banner");

var images = new Array(
  "images/bg1.jpg",
  "images/bg2.jpg",
  "images/bg3.jpg",
  "images/bg4.jpg"
);

var len = images.length;


  if (i > len - 1) {
    i = 1;
  }

  var className = 'banner-img' + i;

  // banner.src = images[i];
  $('#banner').removeClass($('#banner').attr('class'));
  $('#banner').addClass('banner ' + className);

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

function onSignInButtonClick(){

}

function onSignUpButtonClick(){

  var firstname = $("#firstName").val();
  var lastname = $("#firstName").val();
  var Email = $("#email").val();
  var Password = $("#password").val();

  var largestNumber = 0;

  if (localStorage.length != 0) {
    Object.keys(localStorage).forEach(function (key) {
      if (largestNumber < JSON.parse(localStorage.getItem(key))._Id) {
        largestNumber = JSON.parse(localStorage.getItem(key))._Id;
      }
    });
  }

  var generatedId = largestNumber + 1;

  var userInfo = {
    _Id: generatedId,
    _firstName: firstname,
    _lastName: lastname,
    _email: Email,
    _password: Password,
  };

  var userInfo = JSON.stringify(userInfo);

  localStorage.setItem("RiseInfo_" + generatedId, userInfo);

  callPage("member.html?Id=RiseInfo_" + generatedId, "#admin");

}

function onUpdate(userId) {
  callPage("member.html?Id=RiseInfo_" + generatedId, "#admin");
}

function onDelete(userId) {
  localStorage.removeItem("RiseInfo_" + userId);
  alert("Successfully Deleted");

  callPage("member.html?Id=RiseInfo_" + generatedId, "#admin");
}


/*------------------------------------Calling pages------------------------------------*/
function callRegistration() {
  callPage("register.html", "#about");
}

function callPrivacyPolicy() {
  callPage("privacypolicy.html", "#content");
}

function callOpenHouse() {
  callPage("openhouse.html", "#about");
} 

function callAppointment() {
  callPage("appointment.html", "#about");
}

function callAdmin(){
  callPage("admin.html", "#about");
}

function callPage(pageRefInput, content) {
  $.ajax({
    url: pageRefInput,
    type: "GET",
    dataType: "text",
    success: function (response) {
      $(content).html(response);
      window.location.href = 'index.html' + content;
    },
  });
}
function callReset(value) {
  $(".active").removeClass("active");

  if(value == 1) {
    $("#bannderId").addClass("active"); 
  } 

  if(value == 2) {
    $("#aboutId").addClass("active"); 
  } 

  if(value == 3) {
    $("#exploreId").addClass("active");
  }

  if(value == 4) {
    $("#standardsId").addClass("active");
  }

  if(value == 5) {
    $("#testimonialsId").addClass("active");
  }

  if(value == 6) {
    $("#connectId").addClass("active");
  }

  loadAboutPage();
  $("#content").empty();
}

function loadAboutPage(){
  $("#about").append(function () {
    $.ajax({
      url: "about.html",
      type: "GET",
      dataType: "text",
      success: function (response) {
        $("#about").html(response);
      },
    });
  });
}

$(document).ready(function () {
  loadAboutPage();
  
});
