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

  var len = 4;

  if (i > len - 1) {
    i = 1;
  }

  var className = "banner-img" + i;
  $("#banner").removeClass($("#banner").attr("class"));
  $("#banner").addClass("banner " + className);

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

function onSignInButtonClick() {
  var username = $("#username").val();
  var password = $("#password").val();

  if (username == "admin" && password == "admin") {
    callAdmin();
  } else {
    window.location.href = "index.html";
  }
}

function onSignUpButtonClick() {
  if (!$("#termsId").prop("checked")) {
    alert("Please agree to terms and conditions");
    return;
  } else {
    $("#content").empty();
    $("#about").empty();
    $("#openhouse").empty();
    $("#newappointment").empty();

    var firstname = $("#firstName").val();
    var lastname = $("#lastName").val();
    var Email = $("#email").val();
    var Password = $("#password_0").val();

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

    callthankyou();
  }
}

function onUpdate(userId) {
  $.ajax({
    url: "leaddataedit/leaddataedit.html",
    type: "GET",
    dataType: "text",
    success: function (response) {
      $("#registration").html(response);
      window.location.href = "index.html#registration?Id=RiseInfo_" + userId;
      var _userInfo = getLeadRecord();
      $("#firstNameEdit").val(_userInfo._firstName);
      $("#lastNameEdit").val(_userInfo._lastName);
      $("#emailEdit").val(_userInfo._email);
      $("#passwordEdit").val(_userInfo._password);
    },
  });
}

function onUpdateButtonClick() {
  var firstname = $("#firstNameEdit").val();
  var lastname = $("#lastNameEdit").val();
  var Email = $("#emailEdit").val();
  var Password = $("#passwordEdit").val();

  var existingUser = getLeadRecord();

  var userInfo = {
    _Id: existingUser._Id,
    _firstName: firstname,
    _lastName: lastname,
    _email: Email,
    _password: Password,
  };

  localStorage.setItem(
    "RiseInfo_" + existingUser._Id,
    JSON.stringify(userInfo)
  );

  alert("Successfully Updated!");

  callAdmin();
}

function getLeadRecord() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var userId = "RiseInfo_" + url_string.slice(-1);

  var _userInfos = localStorage;
  var _userInfo;
  for (var i = 0; i < _userInfos.length; i++) {
    if (userId == "RiseInfo_" + JSON.parse(localStorage.getItem(userId))._Id) {
      _userInfo = JSON.parse(localStorage.getItem(userId));
    }
  }

  return _userInfo;
}

function onDelete(userId) {
  localStorage.removeItem("RiseInfo_" + userId);
  alert("Successfully Deleted");

  geneateAdminTable();
}

/*------------------------------------Calling pages------------------------------------*/
function callRegistration() {
  $("#about").empty();
  $("#content").empty();
  $("#registration").empty();
  $("#thankyou").empty();
  $("#openhouse").empty();
  $("#newappointment").empty();

  callPage("register/register.html", "#registration");
}

function callPrivacyPolicy() {
  $("#about").empty();
  $("#content").empty();
  $("#registration").empty();
  $("#thankyou").empty();
  $("#openhouse").empty();
  $("#newappointment").empty();
  callPage("privacypolicy/privacypolicy.html", "#content");
}

function callOpenHouse() {
  $("#about").empty();
  $("#content").empty();
  $("#registration").empty();
  $("#thankyou").empty();
  $("#openhouse").empty();
  $("#newappointment").empty();
  callPage("openhouse/openhouse.html", "#openhouse");
}
function callthankyou() {
  $("#about").empty();
  $("#content").empty();
  $("#registration").empty();
  $("#thankyou").empty();
  $("#openhouse").empty();
  $("#newappointment").empty();
  callPage("thankyou/thankyou.html", "#thankyou");
}

function callAppointment() {
  $("#about").empty();
  $("#content").empty();
  $("#registration").empty();
  $("#thankyou").empty();
  $("#openhouse").empty();
  $("#newappointment").empty();
  callPage("appointment/appointment.html", "#newappointment");
}

function callAdmin() {
  $("#about").empty();
  $("#content").empty();
  $("#registration").empty();
  $("#thankyou").empty();
  $("#openhouse").empty();
  $("#newappointment").empty();
  callPage("admin/admin.html", "#admin");

  setTimeout(function () {
    window.location.href = "index.html#admin";
  }, 100);
}

function callSitemap() {
  $("#about").empty();
  $("#content").empty();
  $("#registration").empty();
  $("#thankyou").empty();
  $("#openhouse").empty();
  $("#newappointment").empty();
  callPage("sitemap/sitemap.html", "#content");
}

function callConect() {
  $("#about").empty();
  $("#content").empty();
  $("#registration").empty();
  $("#thankyou").empty();
  $("#openhouse").empty();
  $("#newappointment").empty();
  window.location.href = "index.html#footer";
}

function callPage(pageRefInput, content) {
  $.ajax({
    url: pageRefInput,
    type: "GET",
    dataType: "text",
    success: function (response) {
      $(content).html(response);
      window.location.href = "index.html" + content;
    },
  });
}

function callReset(value) {
  $(".active").removeClass("active");

  if (value == 1) {
    $("#bannderId").addClass("active");
  }

  if (value == 2) {
    $("#aboutId").addClass("active");
  }

  if (value == 3) {
    $("#exploreId").addClass("active");
  }

  if (value == 4) {
    $("#standardsId").addClass("active");
  }

  if (value == 5) {
    $("#testimonialsId").addClass("active");
  }

  if (value == 6) {
    $("#connectId").addClass("active");
  }

  loadAboutPage();
  $("#admin").empty();
  $("#content").empty();
  $("#registration").empty();
  $("#thankyou").empty();
  $("#openhouse").empty();
  $("#newappointment").empty();
  closePopup();
}

function loadAboutPage() {
  $("#about").append(function () {
    $.ajax({
      url: "about/about.html",
      type: "GET",
      dataType: "text",
      success: function (response) {
        $("#about").html(response);
      },
    });
  });
}

function onOkButtonClick() {
  callReset(1);
}

//Popup Page
function callPopup(val) {
  $(".popup").fadeIn(300);

  if (val == 1) {
    $("#popupTitleId").text("Single Family Home for Rent, Galle");
    $("#popupContentId").text(
      "No 30, 7th Street, Sri Lanka, Rent this property for only Rs. 30,000 month. "
    );
  }

  if (val == 2) {
    $("#popupTitleId").text("3 Storey Spacious House for Sale, Homagama");
    $("#popupContentId").text(
      "Buy this property for only Rs. 414,398/month. Use our Home Loan Calculator to find out more or Compare the rates"
    );
  }

  if (val == 3) {
    $("#popupTitleId").text("House for Sale, Negambo");
    $("#popupContentId").text(
      "Buy this property for only Rs. 214,398 month.Use our Home Loan Calculator to find out more or Compare the rates"
    );
  }
  if (val == 4) {
    $("#popupTitleId").text("House for sale, Dickmans Road -Colombo 5");
    $("#popupContentId").text(
      "Use our Home Loan Calculator to find out more or Compare the rates"
    );
  }
  if (val == 5) {
    $("#popupTitleId").text("House for sale, Jayanthipura, Battaramulla ");
    $("#popupContentId").text(
      "Use our Home Loan Calculator to find out more or Compare the rates"
    );
  }
  if (val == 6) {
    $("#popupTitleId").text(
      "4 Bedroom modern house at Thalawathugoda for immediate sale"
    );
    $("#popupContentId").text(
      "Buy this property for only Rs. 362,398 month.Use our Home Loan Calculator to find out more or Compare the rates"
    );
  }
}

//close popup
function closePopup() {
  $(".popup").fadeOut(300);
}

function geneateAdminTable() {
  var userInfos = localStorage;
  var _userInfos = [];

  Object.keys(localStorage).forEach(function (key) {
    if (JSON.parse(localStorage.getItem(key))._Id != undefined) {
      _userInfos.push(JSON.parse(localStorage.getItem(key)));
    }
  });

  //Create a HTML Table element.
  var table = $("<table><table />").addClass("table");

  //Add the header row.
  var row = $(table[0].insertRow(-1));

  var headerCell_1 = $("<th />").addClass("admin th");
  headerCell_1.html("Lead Id");
  row.append(headerCell_1);

  var headerCell_2 = $("<th />").addClass("admin th");
  headerCell_2.html("First Name");
  row.append(headerCell_2);

  var headerCell_3 = $("<th />").addClass("admin th");
  headerCell_3.html("Last Name");
  row.append(headerCell_3);

  var headerCell_4 = $("<th />").addClass("admin th");
  headerCell_4.html("Email");
  row.append(headerCell_4);

  var headerCell_5 = $("<th />").addClass("admin th");
  headerCell_5.html("Action");
  row.append(headerCell_5);

  //Add the data rows.
  for (var i = 0; i < _userInfos.length; i++) {
    row = $(table[0].insertRow(-1));

    var cell_1 = $("<td />");
    cell_1.html(_userInfos[i]._Id);
    row.append(cell_1);

    var cell_2 = $("<td />");
    cell_2.html(_userInfos[i]._firstName);
    row.append(cell_2);

    var cell_3 = $("<td />");
    cell_3.html(_userInfos[i]._lastName);
    row.append(cell_3);

    var cell_4 = $("<td />");
    cell_4.html(_userInfos[i]._email);
    row.append(cell_4);

    row.append(
      '<button class="button-update" type="button" onclick="onUpdate(' +
        _userInfos[i]._Id +
        ')" >Update</button>'
    );
    row.append(
      '<button class="button-delete" type="button" onclick="onDelete(' +
        _userInfos[i]._Id +
        ')" >Delete</button>'
    );
  }

  var dvTable = $(".subcontent");
  dvTable.html("");
  dvTable.append(table);
}

function makeAppointment() {
  daySchedule.initPopupWidget({
    url: "https://meet.dayschedule.com/product-demo",
  });

  $("#admin").empty();
  $("#content").empty();
  $("#about").empty();
  $("#registration").empty();
  $("#thankyou").empty();
  $("#openhouse").empty();
  $("#newappointment").empty();
}

$(document).ready(function () {
  //loadAboutPage();
});
