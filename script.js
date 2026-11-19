const svgPlaceholder = document.querySelector(".svg-placeholder");
const svg = document.querySelector(".svg");

const cof = document.querySelector("#details-cof");
const bun = document.querySelector("#details-bun");
const t = document.querySelector("#details-t");

if (svg && cof && bun && t) {
  cof.addEventListener("toggle", updateSvgPosition);
  bun.addEventListener("toggle", updateSvgPosition);
  t.addEventListener("toggle", updateSvgPosition);
  updateSvgPosition();
}

function updateSvgPosition() {
  console.log("updateSvgPosition");
  const openDetails = document.querySelector(".accordion-item details[open]");

  if (openDetails) {
    /*  console.log(openDetails.dataset.position); */

    svg.dataset.position = openDetails.dataset.position;
  } else {
    delete svg.dataset.position;
  }
}

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}

// HENT OPLYSNINGER FRA URL'EN
const params = new URLSearchParams(window.location.search);

const nickname = params.get("nickname");
const hype = Number(params.get("hype"));
const reason = params.get("reason");

// FIND ARMBÅNDENE
const beginner = document.querySelector("#beginner-bracelet");
const average = document.querySelector("#average-bracelet");
const pro = document.querySelector("#pro-bracelet");

// FIND TEKSTFELTERNE
const braceletName = document.querySelector("#bracelet-name");
const welcome = document.querySelector("#welcome");
const terrainText = document.querySelector("#terrain-text");

// TJEK OM VI ER PÅ EVENTSIDEN
if (beginner && average && pro) {
  // SKJUL ALLE ARMBÅND
  beginner.hidden = true;
  average.hidden = true;
  pro.hidden = true;

  // VÆLG ARMBÅND EFTER LØBETID
  if (hype > 35) {
    beginner.hidden = false;
  } else if (hype >= 25) {
    average.hidden = false;
  } else if (hype >= 15) {
    pro.hidden = false;
  }

  // INDSÆT BRUGERENS NAVN
  if (braceletName) {
    braceletName.textContent = nickname || "DIT NAVN";
  }

  // VIS VELKOMSTTEKST
  if (welcome) {
    welcome.textContent = `HEJ ${nickname || "LØBER"}!`;
  }

  // VIS TERRÆN
  if (terrainText) {
    if (reason === "flad") {
      terrainText.textContent = "DIT VALG: FLADT TERRÆN";
    } else if (reason === "let") {
      terrainText.textContent = "DIT VALG: LET STIGNING";
    } else if (reason === "bakket") {
      terrainText.textContent = "DIT VALG: BAKKET TERRÆN";
    }
  }
}
