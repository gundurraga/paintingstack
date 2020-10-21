//Night mode
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

//Click buttons info
function downloadClicked(clicked_id) {
  if (document.getElementById(clicked_id).querySelector(".downloadClicked").style.display == "none") {
    document.getElementById(clicked_id).querySelector(".downloadClicked").style.display = "block";
    document.getElementById(clicked_id).querySelector(".copyrightClicked").style.display = "none";
  } else {
    document.getElementById(clicked_id).querySelector(".downloadClicked").style.display = "none";
  }
}

function copyrightClicked(clicked_id) {
  if (document.getElementById(clicked_id).querySelector(".copyrightClicked").style.display == "none") {
    document.getElementById(clicked_id).querySelector(".copyrightClicked").style.display = "block";
    document.getElementById(clicked_id).querySelector(".downloadClicked").style.display = "none";
  } else {
    document.getElementById(clicked_id).querySelector(".copyrightClicked").style.display = "none";
  }
}