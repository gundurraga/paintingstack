
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
  document.body.classList.add("night-mode");
} else {
  document.body.classList.remove("night-mode");
}

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "night") {
  document.body.classList.add("night-mode");
} else {
  document.body.classList.remove("night-mode");
}

//This save the user preference of theme on local storage, in the future should be saved by cookies
const btnNightMode = document.querySelector(".btn-nightMode");
btnNightMode.addEventListener("click", function () {
  document.body.classList.toggle("night-mode");

  let theme = "light";
  if (document.body.classList.contains("night-mode")) {
    theme = "night";
  }
  localStorage.setItem("theme", theme);
});
