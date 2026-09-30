// Get elements from the page
var form = document.getElementById("userForm");
var output = document.getElementById("infoOutput");
var message = document.getElementById("message");
var button = document.querySelector("#showInfoBtn");

// Other DOM selection methods required in the activity
var textFields = document.getElementsByClassName("user-input");
var allInputs = document.getElementsByTagName("input");
var colors = document.querySelectorAll("input[name='favoriteColor']");

// This button reads the values entered by the user
button.onclick = function() {
    var fullName = document.getElementById("fullName").value;
    var nickname = document.getElementById("nickname").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var birthday = document.getElementById("birthday").value;
    var phone = document.getElementById("phone").value;
    var school = document.getElementById("school").value;
    var course = document.getElementById("course").value;
    var dreamJob = document.getElementById("dreamJob").value;
    var favoriteSong = document.getElementById("favoriteSong").value;
    var catMood = document.getElementById("catMood").value;
    var favoriteColor = "Not selected";

    // Get the selected radio button
    for (var i = 0; i < colors.length; i++) {
        if (colors[i].checked) {
            favoriteColor = colors[i].value;
        }
    }

    // Simple validation
    if (fullName == "" || email == "") {
        message.textContent = "Please enter your name and email.";
        return;
    }

    // Display the values using DOM manipulation
    output.innerHTML =
        "<div class='info-item'><span class='info-label'>Full Name</span><div class='info-value'>" + fullName + "</div></div>" +
        "<div class='info-item'><span class='info-label'>Nickname</span><div class='info-value'>" + nickname + "</div></div>" +
        "<div class='info-item'><span class='info-label'>Email Address</span><div class='info-value'>" + email + "</div></div>" +
        "<div class='info-item'><span class='info-label'>Age</span><div class='info-value'>" + age + "</div></div>" +
        "<div class='info-item'><span class='info-label'>Birthday</span><div class='info-value'>" + birthday + "</div></div>" +
        "<div class='info-item'><span class='info-label'>Phone Number</span><div class='info-value'>" + phone + "</div></div>" +
        "<div class='info-item'><span class='info-label'>School / University</span><div class='info-value'>" + school + "</div></div>" +
        "<div class='info-item'><span class='info-label'>Course / Program</span><div class='info-value'>" + course + "</div></div>" +
        "<div class='info-item'><span class='info-label'>Dream Job</span><div class='info-value'>" + dreamJob + "</div></div>" +
        "<div class='info-item'><span class='info-label'>Favorite Song</span><div class='info-value'>" + favoriteSong + "</div></div>" +
        "<div class='info-item'><span class='info-label'>Favorite Color</span><div class='info-value'>" + favoriteColor + "</div></div>" +
        "<div class='info-item'><span class='info-label'>Cat Personality</span><div class='info-value'>" + catMood + "</div></div>";

    message.textContent = "Information displayed successfully.";

    // Use the other selected elements so the DOM methods are actually used
    button.title = textFields.length + " text fields and " + allInputs.length + " input elements";
};
