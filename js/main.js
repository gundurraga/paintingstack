//Hides nav bar
window.onload = function () {
  'use strict';
   var c, currentScrollTop = 0,
       navbar = document.querySelector("#Top");
   window.onscroll = function () {
      var a = window.pageYOffset;
      var b = 56;
      currentScrollTop = a;
      if (c < currentScrollTop && a > b + b) {
        navbar.classList.add("scrollUp");
        document.querySelector("#menu").classList.remove("in-view");
        document.querySelector(".menuHamburguer").classList.remove("in-view");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.classList.remove("scrollUp");
      }
      c = currentScrollTop;
  }; 
};
document.querySelector("#Top").classList.remove("scrollUp");
//Menu
function showMenu(x) {
  x.classList.toggle("in-view");
  document.querySelector("#menu").classList.toggle("in-view");
}

//Night theme
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
function prefersTheme() {
  if (prefersDarkScheme.matches) {
    document.body.classList.add("night-mode");
  } else {
    document.body.classList.remove("night-mode");
  }
}
const currentTheme = localStorage.getItem("theme");
function localTheme() {
  if (currentTheme == "night") {
    document.body.classList.add("night-mode");
  } else {
    document.body.classList.remove("night-mode");
  }
}

//This save the user preference of theme on local storage, in the future should be saved by user
const btnNightMode = document.querySelector(".switchTheme");
btnNightMode.addEventListener("click", function () {
  document.body.classList.toggle("night-mode");

  let theme = "light";
  if (document.body.classList.contains("night-mode")) {
    theme = "night";
  }
  localStorage.setItem("theme", theme);
});

//Loader
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    setTimeout(loader, 1500);
  }
};

function loader() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector("body").style.visibility = "visible";
  prefersTheme();
  localTheme();
}

//Click buttons info **Should be one function for every button
function downloadClicked(clicked_id) {
  var downloadClicked = document.getElementById(clicked_id).querySelector(".downloadClicked"),
      copyrightClicked = document.getElementById(clicked_id).querySelector(".copyrightClicked"),
      downloadClickedDisplay = window.getComputedStyle(downloadClicked).getPropertyValue("display");
  if (downloadClickedDisplay == "none") {
    downloadClicked.style.display = "block";
    copyrightClicked.style.display = "none";
  } else {
    downloadClicked.style.display = "none";
  }
}

function copyrightClicked(clicked_id) {
  var downloadClicked = document.getElementById(clicked_id).querySelector(".downloadClicked"),
      copyrightClicked = document.getElementById(clicked_id).querySelector(".copyrightClicked"),
      copyrightClickedDisplay = window.getComputedStyle(copyrightClicked).getPropertyValue("display");
  if (copyrightClickedDisplay == "none") {
    copyrightClicked.style.display = "block";
    downloadClicked.style.display = "none";
  } else {
    copyrightClicked.style.display = "none";
  }
}

function backTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.querySelector("#Top").classList.remove("scrollUp");
}