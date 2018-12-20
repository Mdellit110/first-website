var aboutMe = document.getElementById('aboutme');
var contactMe = document.getElementById('contactme');
var aboutMeButton = document.getElementById('AM')
var contactMeButton = document.getElementById('CM')


aboutMe.style.display = "none";
contactMe.style.display = "none";

function toggleAboutMe() {
  aboutMe.style.display = "block";
  contactMe.style.display = "none";
  aboutMeButton.style.backgroundImage = "linear-gradient(#5998ff, #296bd8)";
  contactMeButton.style.backgroundImage = "linear-gradient(rgba(146, 168, 228, 0.01), rgba(146, 168, 228, 0.40))";
}

function toggleContactMe() {
  aboutMe.style.display = "none";
  contactMe.style.display = "flex";
  contactMeButton.style.backgroundImage = "linear-gradient(#5998ff, #296bd8)";
  aboutMeButton.style.backgroundImage = "linear-gradient(rgba(146, 168, 228, 0.01), rgba(146, 168, 228, 0.40))";
}
