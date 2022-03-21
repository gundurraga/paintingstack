let en = {
  languageSelector: "Language: EN",
  themeSelector: "Night Mode",
  sayHello: "Say Hello to",
  download: "Download",

  earth: "Earth",
  earth_media: "Oil on canvas",
  margherita: "Margherita",
  margherita_media: "Oil on canvas",
  the_last_supper: "The Last Supper",
  the_last_supper_media: "Oil on canvas",
  lisbon: "Lisbon",
  lisbon_media: "Oil on canvas",
  golden_statues: "Golden Statues",
  golden_statues_media: "Oil on canvas",
  the_ermine: "The Ermine",
  the_ermine_media: "Oil on canvas",
  mondrian_room: "Mondrian Room",
  mondrian_room_media: "Oil on canvas",
  pura_vida_road: "Pura Vida Road",
  pura_vida_road_media: "Acrylic and oil on canvas",
  scarlet_macaws: "Scarlet Macaws",
  scarlet_macaws_media: "Oil on canvas",
  three_motorcycles: "Three Motorcycles",
  three_motorcycles_media: "Oil on canvas",
  aloe_vera: "Aloe Vera",
  aloe_vera_media: "Oil on canvas",
  the_race: "The Race",
  the_race_media: "Oil on canvas",
  untitled_i: "Untitled I",
  untitled_i_media: "Oil on canvas",
};

let es = {
  languageSelector: "Idioma: ES",
  themeSelector: "Modo Noche",
  sayHello: "Saluda a",
  download: "Descargar",

  earth: "Tierra",
  earth_media: "Óleo sobre tela",
  margherita: "Margherita",
  margherita_media: "Óleo sobre tela",
  the_last_supper: "La Última Cena",
  the_last_supper_media: "Óleo sobre tela",
  lisbon: "Lisboa",
  lisbon_media: "Óleo sobre tela",
  golden_statues: "Estatuas Doradas",
  golden_statues_media: "Óleo sobre tela",
  the_ermine: "El Armiño",
  the_ermine_media: "Óleo sobre tela",
  mondrian_room: "Pieza Mondrian",
  mondrian_room_media: "Óleo sobre tela",
  pura_vida_road: "Calle Pura Vida",
  pura_vida_road_media: "Acrílico y óleo sobre tela",
  scarlet_macaws: "Guacamayas Rojas",
  scarlet_macaws_media: "Óleo sobre tela",
  three_motorcycles: "Tres Motos",
  three_motorcycles_media: "Óleo sobre tela",
  aloe_vera: "Aloe Vera",
  aloe_vera_media: "Óleo sobre tela",
  the_race: "La Carrera",
  the_race_media: "Óleo sobre tela",
  untitled_i: "Sin Título I",
  untitled_i_media: "Óleo sobre tela",
};

let fr = {
  languageSelector: "Langue: FR",
  themeSelector: "Mode Nuit",
  sayHello: "Dire salut à",
  download: "Télécharger",

  earth: "Terre",
  earth_media: "Huile sur toile",
  margherita: "Margherita",
  margherita_media: "Huile sur toile",
  the_last_supper: "La Cène",
  the_last_supper_media: "Huile sur toile",
  lisbon: "Lisbonne",
  lisbon_media: "Huile sur toile",
  golden_statues: "Statues Dorées",
  golden_statues_media: "Huile sur toile",
  the_ermine: "L'Hermine",
  the_ermine_media: "Huile sur toile",
  mondrian_room: "Chambre Mondrian",
  mondrian_room_media: "Huile sur toile",
  pura_vida_road: "Rue Pura Vida",
  pura_vida_road_media: "Acrylique et huile sur toile",
  scarlet_macaws: "Aras Écarlates",
  scarlet_macaws_media: "Huile sur toile",
  three_motorcycles: "Trois Motos",
  three_motorcycles_media: "Huile sur toile",
  aloe_vera: "Aloe Vera",
  aloe_vera_media: "Huile sur toile",
  the_race: "La Course",
  the_race_media: "Huile sur toile",
  untitled_i: "Sans Titre I",
  untitled_i_media: "Huile sur toile",
};

let lang = navigator.language || navigator.userLanguage;
language = lang.slice(0, 2);

// set all the text
function translate(lang) {
  document.getElementById("languageSelector").innerHTML = lang.languageSelector;
  document.getElementById("themeSelector").innerHTML = lang.themeSelector;
  document.getElementById("sayHello").innerHTML = lang.sayHello;

  document.getElementById("earth-2022").innerHTML = lang.earth;
  document.getElementById("earth-2022-media").innerHTML = lang.earth_media;
  document.getElementById("margherita-2022").innerHTML = lang.margherita;
  document.getElementById("margherita-2022-media").innerHTML =
    lang.margherita_media;
  document.getElementById("the-last-supper-2021").innerHTML =
    lang.the_last_supper;
  document.getElementById("the-last-supper-2021-media").innerHTML =
    lang.the_last_supper_media;
  document.getElementById("lisbon-2021").innerHTML = lang.lisbon;
  document.getElementById("lisbon-2021-media").innerHTML = lang.lisbon_media;
  document.getElementById("golden-statues-2021").innerHTML =
    lang.golden_statues;
  document.getElementById("golden-statues-2021-media").innerHTML =
    lang.golden_statues_media;
  document.getElementById("the-ermine-2021").innerHTML = lang.the_ermine;
  document.getElementById("the-ermine-2021-media").innerHTML =
    lang.the_ermine_media;
  document.getElementById("mondrian-room-2021").innerHTML = lang.mondrian_room;
  document.getElementById("mondrian-room-2021-media").innerHTML =
    lang.mondrian_room_media;
  document.getElementById("pura-vida-road-2021").innerHTML =
    lang.pura_vida_road;
  document.getElementById("pura-vida-road-2021-media").innerHTML =
    lang.pura_vida_road_media;
  document.getElementById("scarlet-macaws-2020").innerHTML =
    lang.scarlet_macaws;
  document.getElementById("scarlet-macaws-2020-media").innerHTML =
    lang.scarlet_macaws_media;
  document.getElementById("three-motorcycles-2020").innerHTML =
    lang.three_motorcycles;
  document.getElementById("three-motorcycles-2020-media").innerHTML =
    lang.three_motorcycles_media;
  document.getElementById("aloe-vera-2020").innerHTML = lang.aloe_vera;
  document.getElementById("aloe-vera-2020-media").innerHTML =
    lang.aloe_vera_media;
  document.getElementById("the-race-2017").innerHTML = lang.the_race;
  document.getElementById("the-race-2017-media").innerHTML =
    lang.the_race_media;
  document.getElementById("untitled-i-2015").innerHTML = lang.untitled_i;
  document.getElementById("untitled-i-2015-media").innerHTML =
    lang.untitled_i_media;

  let downloads = document.querySelectorAll(".download");
  downloads.forEach((download) => {
    download.innerHTML = lang.download;
  });
}

document.getElementsByClassName("selectLanguage");

const btnSelectLanguage = document.querySelector(".selectLanguage");
btnSelectLanguage.addEventListener("click", function () {
  document.querySelector(".languages").classList.toggle("lang-in-view");
});

const selectEN = document.querySelector("#en");
selectEN.addEventListener("click", () => {
  translate(en);
  document.querySelector(".languages").classList.remove("lang-in-view");
});

const selectES = document.querySelector("#es");
selectES.addEventListener("click", () => {
  translate(es);
  document.querySelector(".languages").classList.remove("lang-in-view");
});

const selectFR = document.querySelector("#fr");
selectFR.addEventListener("click", () => {
  translate(fr);
  document.querySelector(".languages").classList.remove("lang-in-view");
});

if (language === "en") {
  translate(en);
} else if (language === "es") {
  translate(es);
} else if (language === "fr") {
  translate(fr);
}
