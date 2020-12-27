'use strict';

const postData = [
  {
    Date: "December 23, 2020",
    ID: "Boccioni-1913",
    Artist: "Umberto Boccioni",
    ArtworkTitle: "Dynamism of a Cyclist",
    ArtworkYear: 1913,
    BirthYear: 1882,
    DeathYear: 1916,
    ContryId: "it",
    Country: "Italy",
    DimensionCm:"70 x 95 cm",
    DimensionIn:"27.6 x 37.4 in.",
    Museum: "Guggenheim Museum",
    MuseumTwitter: "Guggenheim",
    ImageSize:"0.6",
    ImageDimension:"3477 x 2520",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
    {
    Date: "December 16, 2020",
    ID: "deMonfreid-1889",
    Artist: "George-Daniel de Monfreid",
    ArtworkTitle: "Landscape",
    ArtworkYear: 1889,
    BirthYear: 1856,
    DeathYear: 1929,
    ContryId: "fr",
    Country: "France",
    DimensionCm:"72.9 x 99.9 cm",
    DimensionIn:"28 11/16 x 39 5/16 in.",
    Museum: "Indianapolis Museum of Art",
    MuseumTwitter: "NewfieldsToday",
    ImageSize:"1.2",
    ImageDimension:"1050 x 753",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
  {
    Date: "December 9, 2020",
    ID: "Chase-1883",
    Artist: "William Merritt Chase",
    ArtworkTitle: "Portrait of Dora Wheeler",
    ArtworkYear: 1883,
    BirthYear: 1849,
    DeathYear: 1916,
    ContryId: "us",
    Country: "United States of America",
    DimensionCm:"159.8 x 166.4 cm",
    DimensionIn:"62 15/16 x 65 1/2 in.",
    Museum: "The Cleveland Museum of Art",
    MuseumTwitter: "ClevelandArt",
    ImageSize:"7.8",
    ImageDimension:"3400 x 3254",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
  {
    Date: "December 2, 2020",
    ID: "Saenredam-1641",
    Artist: "Pieter Jansz Saenredam",
    ArtworkTitle: "The Nave and Choir of the Mariakerk in Utrecht",
    ArtworkYear: 1641,
    BirthYear: 1597,
    DeathYear: 1665,
    ContryId: "nl",
    Country: "Netherlands",
    DimensionCm:"121.5 cm x 95 cm",
    DimensionIn:"47.8 × 37.4 in.",
    Museum: "Rijksmuseum",
    MuseumTwitter: "rijksmuseum",
    ImageSize:"0.4",
    ImageDimension:"1944 x 2502",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
  {
    Date: "November 25, 2020",
    ID: "Strathmann-1913",
    Artist: "Carl Strathmann",
    ArtworkTitle: "Carnival Parade",
    ArtworkYear: 1913,
    BirthYear: 1866,
    DeathYear: 1930,
    ContryId: "de",
    Country: "Germany",
    DimensionCm:"105 cm x 171.5 cm",
    DimensionIn:"41.3 × 67.5 in.",
    Museum: "Lenbachhaus",
    MuseumTwitter: "Lenbachhaus",
    ImageSize:"2.5",
    ImageDimension:"2000 x 1206",
    License: "CC BY-SA 4.0",
    LicenseLink: "https://creativecommons.org/licenses/by-sa/4.0/deed.en",
  },
  {
    Date: "November 18, 2020",
    ID: "Sorolla-1910",
    Artist: "Joaquín Sorolla y Bastida",
    ArtworkTitle: "Corner of the Garden, Alcazar, Sevilla",
    ArtworkYear: 1910,
    BirthYear: 1863,
    DeathYear: 1923,
    ContryId: "es",
    Country: "Spain",
    DimensionCm:"95.3 × 63.5 cm",
    DimensionIn:"37 1/2 × 25 in.",
    Museum: "J. Paul Getty Museum",
    MuseumTwitter: "GettyMuseum",
    ImageSize:"2.4",
    ImageDimension:"1988 x 3000",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
  {
    Date: "November 11, 2020",
    ID: "elGreco-1600",
    Artist: "El Greco",
    ArtworkTitle: "View of Toledo",
    ArtworkYear: 1600,
    BirthYear: 1541,
    DeathYear: 1614,
    ContryId: "gr",
    Country: "Greece",
    DimensionCm:"121.3 x 108.6 cm",
    DimensionIn:"47 3/4 x 42 3/4 in.",
    Museum: "The Metropolitan Museum of Art",
    MuseumTwitter: "metmuseum",
    ImageSize:"3.4",
    ImageDimension:"3445 x 3882",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
{
    Date: "November 4, 2020",
    ID: "Sandys-1864",
    Artist: "Frederick Sandys",
    ArtworkTitle: "Morgan le Fay",
    ArtworkYear: 1864,
    BirthYear: 1829,
    DeathYear: 1904,
    ContryId: "gb",
    Country: "England",
    DimensionCm:"61.8 × 43.7 cm",
    DimensionIn:"24.3 x 17.2 in.",
    Museum: "Birmingham Museum and Art Gallery",
    MuseumTwitter: "BM_AG",
    ImageSize:"1.7",
    ImageDimension:"1779 x 2500",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
{
    Date: "October 28, 2020",
    ID: "Berlin-1939",
    Artist: "Benjamin F. Berlin",
    ArtworkTitle: "Untitled (Surreal Abstraction)",
    ArtworkYear: 1939,
    BirthYear: 1887,
    DeathYear: 1939,
    ContryId: "us",
    Country: "United States of America",
    DimensionCm:"50.8 × 60.96 cm",
    DimensionIn:"20 × 24 in.",
    Museum: "Los Angeles County Museum of Art",
    MuseumTwitter: "LACMA",
    ImageSize:"1.4",
    ImageDimension:"2100 x 1881",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
{
    Date: "October 21, 2020",
    ID: "daVinci-1489",
    Artist: "Leonardo da Vinci",
    ArtworkTitle: "The Lady with an Ermine",
    ArtworkYear: 1489,
    BirthYear: 1452,
    DeathYear: 1518,
    ContryId: "it",
    Country: "Italy",
    DimensionCm:"54.8 x 40.3 cm",
    DimensionIn:"21.5 x 15.8 in.",
    Museum: "Czartoryski Museum",
    MuseumTwitter: "MNKrk",
    ImageSize:"4.0",
    ImageDimension:"3474 x 4745",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
{
    Date: "October 14, 2020",
    ID: "Klimt-1913",
    Artist: "Gustav Klimt",
    ArtworkTitle: "The Maiden",
    ArtworkYear: 1913,
    BirthYear: 1862,
    DeathYear: 1918,
    ContryId: "at",
    Country: "Austria",
    DimensionCm:"190 × 200 cm",
    DimensionIn:"74.8 × 78.7 in.",
    Museum: "National Gallery Prague",
    MuseumTwitter: "narodnigalerie",
    ImageSize:"7.6",
    ImageDimension:"4790 x 4576",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
{
    Date: "October 7, 2020",
    ID: "Cassatt-1873",
    Artist: "Mary Cassatt",
    ArtworkTitle: "After the Bullfight",
    ArtworkYear: 1873,
    BirthYear: 1844,
    DeathYear: 1926,
    ContryId: "us",
    Country: "United States of America",
    DimensionCm:"82.5 × 64 cm",
    DimensionIn:"32 1/8 × 25 3/16 in.",
    Museum: "The Metropolitan Museum of Art",
    MuseumTwitter: "metmuseum",
    ImageSize:"1.8",
    ImageDimension:"2343 x 3000",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
{
    Date: "September 30, 2020",
    ID: "Zahrtmann-1891",
    Artist: "Kristian Zahrtmann",
    ArtworkTitle: "Bird's Eye View from Ravello towards Torello",
    ArtworkYear: 1891,
    BirthYear: 1843,
    DeathYear: 1917,
    ContryId: "dk",
    Country: "Denmark",
    DimensionCm:"42.5 x 54.5 cm",
    DimensionIn:"16 3/4 x 21 1/4 in.",
    Museum: "National Gallery of Denmark",
    MuseumTwitter: "smkmuseum",
    ImageSize:"1.5",
    ImageDimension:"1200 x 935",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
{
    Date: "September 23, 2020",
    ID: "Waugh-1924",
    Artist: "Frederick Judd Waugh",
    ArtworkTitle: "The Next Wave",
    ArtworkYear: 1924,
    BirthYear: 1861,
    DeathYear: 1940,
    ContryId: "us",
    Country: "United States of America",
    DimensionCm:"92.1 x 96.8 cm",
    DimensionIn:"36 1/4 x 38 1/8 in.",
    Museum: "Indianapolis Museum of Art",
    MuseumTwitter: "NewfieldsToday",
    ImageSize:"4.7",
    ImageDimension:"3000 x 2842",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
{
    Date: "September 16, 2020",
    ID: "vanGogh-1890",
    Artist: "Vincent van Gogh",
    ArtworkTitle: "The Drinkers",
    ArtworkYear: 1890,
    BirthYear: 1853,
    DeathYear: 1890,
    ContryId: "nl",
    Country: "Netherlands",
    DimensionCm:"59.4 × 73.4 cm",
    DimensionIn:"23 3/8 × 28 7/8 in.",
    Museum: "The Art Institute of Chicago",
    MuseumTwitter: "artinstitutechi",
    ImageSize:"3.0",
    ImageDimension:"3000 x 2413",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
{
    Date: "September 9, 2020",
    ID: "Kandinsky-1914",
    Artist: "Wassily Kandinsky",
    ArtworkTitle: "Painting with a Red Stain",
    ArtworkYear: 1914,
    BirthYear: 1866,
    DeathYear: 1944,
    ContryId: "ru",
    Country: "Russia",
    DimensionCm:"130 x 130 cm",
    DimensionIn:"51 3/16 x 51 3/16 in.",
    Museum: "National Museum of Modern Art",
    MuseumTwitter: "CentrePompidou",
    ImageSize:"3.1",
    ImageDimension:"3283 x 3263",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
{
    Date: "September 2, 2020",
    ID: "Rembrandt-1653",
    Artist: "Rembrandt van Rijn",
    ArtworkTitle: "Aristotle with a Bust of Homer",
    ArtworkYear: 1653,
    BirthYear: 1606,
    DeathYear: 1669,
    ContryId: "nl",
    Country: "Netherlands",
    DimensionCm:"143.5 x 136.5 cm",
    DimensionIn:"55 1/2 x 53 3/4 in.",
    Museum: "The Metropolitan Museum of Art",
    MuseumTwitter: "metmuseum",
    ImageSize:"1.6",
    ImageDimension:"3538 x 3734",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
{
    Date: "August 26, 2020",
    ID: "vanHonthorst-1622",
    Artist: "Gerrit van Honthorst",
    ArtworkTitle: "Musical Group on a Balcony",
    ArtworkYear: 1622,
    BirthYear: 1590,
    DeathYear: 1656,
    ContryId: "nl",
    Country: "Netherlands",
    DimensionCm:"309.9 × 216.4 cm",
    DimensionIn:"122 × 85 3/16 in.",
    Museum: "J. Paul Getty Museum",
    MuseumTwitter: "GettyMuseum",
    ImageSize:"1.2",
    ImageDimension:"2009 x 2891",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
{
    Date: "August 19, 2020",
    ID: "Bellows-1909",
    Artist: "George Bellows",
    ArtworkTitle: "Stag at Sharkey's",
    ArtworkYear: 1909,
    BirthYear: 1882,
    DeathYear: 1925,
    ContryId: "us",
    Country: "United States of America",
    DimensionCm:"92 x 122.6 cm",
    DimensionIn:"36 1/4 x 48 1/4 in.",
    Museum: "The Cleveland Museum of Art",
    MuseumTwitter: "ClevelandArt",
    ImageSize:"1.6",
    ImageDimension:"3326 x 2488",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
{
    Date: "August 12, 2020",
    ID: "Gauguin-1891",
    Artist: "Paul Gauguin",
    ArtworkTitle: "The Big Tree",
    ArtworkYear: 1891,
    BirthYear: 1848,
    DeathYear: 1903,
    ContryId: "fr",
    Country: "France",
    DimensionCm:"72.5 × 91.5 cm",
    DimensionIn:"28 9/16 × 36 in.",
    Museum: "The Art Institute of Chicago",
    MuseumTwitter: "artinstitutechi",
    ImageSize:"4.5",
    ImageDimension:"3000 x 2367",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
{
    Date: "August 5, 2020",
    ID: "Modigliani-1918",
    Artist: "Amedeo Modigliani",
    ArtworkTitle: "Portrait of a Woman",
    ArtworkYear: 1918,
    BirthYear: 1884,
    DeathYear: 1920,
    ContryId: "it",
    Country: "Italy",
    DimensionCm:"65 x 48.3 cm",
    DimensionIn:"25 9/16 x 19 in.",
    Museum: "The Cleveland Museum of Art",
    MuseumTwitter: "ClevelandArt",
    ImageSize:"6.8",
    ImageDimension:"2523 x 3400",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
 
{
    Date: "July 29, 2020",
    ID: "Bouguereau-1880",
    Artist: "William-Adolphe Bouguereau",
    ArtworkTitle: "A Young Girl Defending Herself against Eros",
    ArtworkYear: 1880,
    BirthYear: 1825,
    DeathYear: 1905,
    ContryId: "fr",
    Country: "France",
    DimensionCm:"81.6 × 57.8 cm",
    DimensionIn:"32 1/8 × 22 3/4 in.",
    Museum: "J. Paul Getty Museum",
    MuseumTwitter: "GettyMuseum",
    ImageSize:"1.4",
    ImageDimension:"2101 x 3000",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
 
{
    Date: "July 22, 2020",
    ID: "Hopper-1939",
    Artist: "Edward Hopper",
    ArtworkTitle: "Cape Cod Evening",
    ArtworkYear: 1939,
    BirthYear: 1882,
    DeathYear: 1968,
    ContryId: "us",
    Country: "United States of America",
    DimensionCm:"76.2 × 101.6 cm",
    DimensionIn:"30 × 40 in.",
    Museum: "National Gallery of Art",
    MuseumTwitter: "ngadc",
    ImageSize:"3.0",
    ImageDimension:"3000 x 2250",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
 
{
    Date: "July 15, 2020",
    ID: "Bompiani-1899",
    Artist: "Roberto Bompiani",
    ArtworkTitle: "A Roman Feast",
    ArtworkYear: 1899,
    BirthYear: 1821,
    DeathYear: 1908,
    ContryId: "it",
    Country: "Italy",
    DimensionCm:"127 × 163.8 cm",
    DimensionIn:"50 × 64 1/2 in.",
    Museum: "J. Paul Getty Museum",
    MuseumTwitter: "GettyMuseum",
    ImageSize:"3.6",
    ImageDimension:"3000 x 2384",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
 
{
    Date: "July 8, 2020",
    ID: "Vermeer-1672",
    Artist: "Johannes Vermeer",
    ArtworkTitle: "Allegory of the Catholic Faith",
    ArtworkYear: 1672,
    BirthYear: 1632,
    DeathYear: 1675,
    ContryId: "nl",
    Country: "Netherlands",
    DimensionCm:"114.3 x 88.9 cm",
    DimensionIn:"45 x 35 in.",
    Museum: "The Metropolitan Museum of Art",
    MuseumTwitter: "metmuseum",
    ImageSize:"2.4",
    ImageDimension:"2818 x 3628",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
 
{
    Date: "July 1, 2020",
    ID: "Cezanne-1900",
    Artist: "Paul Cézanne",
    ArtworkTitle: "Still Life with Milk Jug and Fruit",
    ArtworkYear: 1900,
    BirthYear: 1839,
    DeathYear: 1906,
    ContryId: "fr",
    Country: "France",
    DimensionCm:"45.8 x 54.9 cm",
    DimensionIn:"18 1/16 x 21 5/8 in.",
    Museum: "National Gallery of Art",
    MuseumTwitter: "ngadc",
    ImageSize:"4.1",
    ImageDimension:"4096 x 3436",
    License: "CC0 1.0 Universal",
    LicenseLink: "https://creativecommons.org/publicdomain/zero/1.0/",
  }

];

var first12postData = postData.slice(0,12);


// javascript template literals https://www.youtube.com/watch?v=DG4obitDvUA&ab_channel=LearnWebCode
function postTemplate(post) {
  return `
  <article class="post" id="${post.ID}">
    <div class="boxDatePainting">
      <h5 class="date">${post.Date}</h5>
      <div class="frame">
        <a href="images/500p/${post.ID}.jpg"
          data-srcset=" images/500p/${post.ID}.jpg 500w,  images/600p/${post.ID}.jpg 600w, images/700p/${post.ID}.jpg 700w" 
          data-sizes="85vw" class="progressive replace">
          <img src="images/preview/${post.ID}.jpg" class="preview"
            alt="${post.Artist} - ${post.ArtworkTitle} (${post.ArtworkYear})" />
        </a>
      </div>
    </div>
    <div class="info">
      <div class="info-text">
        <h4>
          <strong >${post.ArtworkTitle}, <span class="artworkYear" title="${post.Artist} was ${post.ArtworkYear-post.BirthYear} years old.">${post.ArtworkYear}</span></strong><br />${post.Artist} (
          <span class="flag-icon flag-icon-${post.ContryId}" title="${post.Country}"></span> ${post.BirthYear}-${post.DeathYear})
        </h4>
        <h5>
        ${post.DimensionCm} (${post.DimensionIn})<br />${post.Museum}
          <a target="_blank" class="museumTwitter" href="https://twitter.com/${post.MuseumTwitter}">@${post.MuseumTwitter}</a>
        </h5>
      </div>
      <div class="info-icons">
        <div class="downloadIcon" id="${post.ID}" onclick="downloadClicked(this.id)"><ion-icon name="download-outline"></ion-icon></div>
        <div class="copyrightIcon" id="${post.ID}" onclick="copyrightClicked(this.id)"><ion-icon name="information-circle-outline"></ion-icon></div>
      </div>
      <div class="iconClicked">
        <div class="downloadClicked" >
          <a href="images/download/${post.ID}.jpg"
          download="${post.Artist} - ${post.ArtworkTitle}, ${post.ArtworkYear}"><h4>Download (${post.ImageSize} MB)<br><strong>${post.ImageDimension} px</strong> </h4></a>
        </div>
        <div class="copyrightClicked">
          <h4>This painting is shared under the <br><a target="_blank" href="${post.LicenseLink}"><strong>${post.License} License</strong></a>.</h4>
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
${first12postData.map(postTemplate).join('')}
`

document.querySelector(".sliderIn").innerHTML = `
${first12postData.map(function (post) {
  return `<div class="sliderPainting">
  <a href="#${post.ID}" ><img src="images/150p/${post.ID}.jpg"></a>
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