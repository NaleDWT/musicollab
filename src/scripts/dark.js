"use strict"

//affichage darkmode


var currentState = localStorage.getItem("darkmode");
if (currentState == "on") {
  localStorage.setItem("darkmode", "on");
  document.body.classList.add("darkactif");
} else {
  localStorage.setItem("darkmode", "off");
  document.body.classList.remove("darkactif");
}
