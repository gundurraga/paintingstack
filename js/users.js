'use strict';

const gundurraga = [
  {
    Date: "February 9, 2021",
    ID: "the-race-2017",
    UserID: "gundurraga",
    Artist: "Gregorio Undurraga",
    ArtworkTitle: "The Race",
    ArtworkYear: 2017,
    ArtworkLocation: "Santiago, Chile",
    BirthYear: 1993,
    ContryId: "cl",
    Country: "Chile",
    DimensionCm:"80 x 100 cm",
    DimensionIn:"31.5 x 39.4 in.",
    ImageSize:"2.2",
    ImageDimension:"2374 x 1864",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  }, 
    {
    Date: "January 26, 2021",
    ID: "the-ermine-2021",
    UserID: "gundurraga",
    Artist: "Gregorio Undurraga",
    ArtworkTitle: "The Ermine",
    ArtworkYear: 2021,
    ArtworkLocation: "Montezuma, Costa Rica",
    BirthYear: 1993,
    ContryId: "cl",
    Country: "Chile",
    DimensionCm:"50 x 60 cm",
    DimensionIn:"19.7 x 23.6 in.",
    ImageSize:"3.9",
    ImageDimension:"3630 x 2985",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },    
  {
    Date: "January 26, 2021",
    ID: "mondrian-room-2021",
    UserID: "gundurraga",
    Artist: "Gregorio Undurraga",
    ArtworkTitle: "Mondrian Room",
    ArtworkYear: 2021,
    ArtworkLocation: "Montezuma, Costa Rica",
    BirthYear: 1993,
    ContryId: "cl",
    Country: "Chile",
    DimensionCm:"50 x 60 cm",
    DimensionIn:"19.7 x 23.6 in.",
    ImageSize:"5.2",
    ImageDimension:"3652 x 3027",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
  {
    Date: "January 9, 2021",
    ID: "pura-vida-road-2021",
    UserID: "gundurraga",
    Artist: "Gregorio Undurraga",
    ArtworkTitle: "Pura Vida Road",
    ArtworkYear: 2021,
    ArtworkLocation: "Montezuma, Costa Rica",
    BirthYear: 1993,
    ContryId: "cl",
    Country: "Chile",
    DimensionCm:"50 x 70 cm",
    DimensionIn:"19.7 x 27.6 in.",
    ImageSize:"3.7",
    ImageDimension:"4149 x 3108",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
  {
    Date: "December 23, 2020",
    ID: "scarlet-macaws-2020",
    UserID: "gundurraga",
    Artist: "Gregorio Undurraga",
    ArtworkTitle: "Scarlet Macaws",
    ArtworkYear: 2020,
    ArtworkLocation: "Montezuma, Costa Rica",
    BirthYear: 1993,
    ContryId: "cl",
    Country: "Chile",
    DimensionCm:"50 x 60 cm",
    DimensionIn:"19.7 x 23.6 in.",
    ImageSize:"6.6",
    ImageDimension:"3458 x 2850",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
  {
    Date: "December 15, 2020",
    ID: "three-motorcycles-2020",
    UserID: "gundurraga",
    Artist: "Gregorio Undurraga",
    ArtworkTitle: "Three Motorcycles",
    ArtworkYear: 2020,
    ArtworkLocation: "Montezuma, Costa Rica",
    BirthYear: 1993,
    ContryId: "cl",
    Country: "Chile",
    DimensionCm:"50 x 50 cm",
    DimensionIn:"19.7 x 19.7 in.",
    ImageSize:"2.5",
    ImageDimension:"3022 x 3016",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
  {
    Date: "December 15, 2020",
    ID: "aloe-vera-2020",
    UserID: "gundurraga",
    Artist: "Gregorio Undurraga",
    ArtworkTitle: "Aloe Vera",
    ArtworkYear: 2020,
    ArtworkLocation: "Montezuma, Costa Rica",
    BirthYear: 1993,
    ContryId: "cl",
    Country: "Chile",
    DimensionCm:"60 x 50 cm",
    DimensionIn:"23.6 x 19.7 in.",
    ImageSize:"1.8",
    ImageDimension:"2788 x 3411",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  }
];

// javascript template literals https://www.youtube.com/watch?v=DG4obitDvUA&ab_channel=LearnWebCode
function postUserTemplate(post) {
  return `
  <article class="post" id="${post.ID}">
    <div class="boxDatePainting">
      <h5 class="date">${post.Date}</h5>
      <div class="frame">
        <a href="images/users/${post.UserID}/500p/${post.ID}.jpg"
          data-srcset=" images/users/${post.UserID}/500p/${post.ID}.jpg 500w,  images/users/${post.UserID}/600p/${post.ID}.jpg 600w, images/users/${post.UserID}/700p/${post.ID}.jpg 700w" 
          data-sizes="85vw" class="progressive replace">
          <img src="images/users/${post.UserID}/preview/${post.ID}.jpg" class="preview"
            alt="${post.Artist} - ${post.ArtworkTitle} (${post.ArtworkYear})" />
        </a>
      </div>
    </div>
    <div class="info">
      <div class="info-text">
        <h4>
          <strong >${post.ArtworkTitle}, <span class="artworkYear" title="${post.Artist} was ${post.ArtworkYear-post.BirthYear} years old.">${post.ArtworkYear}</span></strong><br />${post.Artist} (
          <span class="flag-icon flag-icon-${post.ContryId}" title="${post.Country}"></span> ${post.BirthYear})
        </h4>
        <h5>
        ${post.DimensionCm} (${post.DimensionIn})<br />
        <ion-icon class="location-icon" name="earth-outline"></ion-icon>${post.ArtworkLocation}
        </h5>
      </div>
      <div class="info-icons">
        <div class="downloadIcon" id="${post.ID}" onclick="downloadClicked(this.id)"><ion-icon name="download-outline"></ion-icon></div>
        <div class="copyrightIcon" id="${post.ID}" onclick="copyrightClicked(this.id)"><ion-icon name="information-circle-outline"></ion-icon></div>
      </div>
      <div class="iconClicked">
        <div class="downloadClicked" >
          <a href="images/users/${post.UserID}/download/${post.ID}.jpg"
          download="${post.ArtworkTitle}, ${post.ArtworkYear} - ${post.Artist}"><h4>Download (${post.ImageSize} MB)<br><strong>${post.ImageDimension} px</strong> </h4></a>
        </div>
        <div class="copyrightClicked">
          <h4>The painting is in the <br><a target="_blank" href="${post.LicenseLink}"><strong>Public Domain</strong></a>.</h4>
        </div>
      </div>
    </div>
  </article>
  `
}

document.querySelector(".loader").innerHTML = `
<div class="frame">
  <div class="logo noisy">
    <div class="inside-logo noisy"></div>
  </div>
</div>
`

document.querySelector("#header").innerHTML = `
    <a class="header-logo" href="https://paintingstack.com">
      <div class="logo">
        <div class="inside-logo noisy"></div>
      </div>
      <h1><strong>Painting</strong>stack</h1>
    </a>

    <div class="menuHamburguer" onclick="showMenu(this)">
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
      <div class="bar bar3"></div>
    </div>

    <ul id="menu">
      <li>
        <div class="switchTheme">
          <h4>Night Mode</h4>
          <div class="btn-nightMode">
            <div class="switch"></div>
          </div>
        </div>
      </li>
      <li>
        <a href="https://twitter.com/paintingstack" target="_blank"><div class="menuLink"><ion-icon name="logo-twitter"></ion-icon><h4>Twitter</h4></div></a>
      </li>
      <li>
        <a href="https://github.com/gundurraga/paintingstack" target="_blank"><div class="menuLink"><ion-icon name="logo-github"></ion-icon><h4>Github</h4></div></a>
      </li>
    </ul>
`

document.querySelector(".container").innerHTML = `
<div class="slider"><div class="sliderIn"></div></div>
${gundurraga.map(postUserTemplate).join('')}
`

document.querySelector(".sliderIn").innerHTML = `
${gundurraga.map(function (post) {
  return `<div class="sliderPainting">
  <a href="#${post.ID}" ><img src="images/users/${post.UserID}/180p/${post.ID}.jpg"></a>
  </div>`
}).join('')}
`

document.querySelector("footer").innerHTML = `
<div class="feedback">
  <h5>Say hello to <a target="_blank" class="footerLink" href="https://twitter.com/paintingstack">@paintingstack</a></h5>
</div>
<div class="back-to-top" onclick="backTop()">
  <h5>TOP</h5>
</div>
`

//Hides nav bar
window.onload = function () {
   var c, currentScrollTop = 0,
       navbar = document.querySelector("#header");
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
      } else if (a === 0) {
        navbar.classList.remove("scrollUp");
      }
      c = currentScrollTop;
  }; 
};

document.querySelector("#header").classList.remove("scrollUp");
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
    setTimeout(loader, 1700);
  }
};

function loader() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector("body").style.visibility = "visible";
  prefersTheme();
  localTheme();
}

//Click buttons info **Should be one function for all the buttons
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
  document.querySelector("#header").classList.remove("scrollUp");
}