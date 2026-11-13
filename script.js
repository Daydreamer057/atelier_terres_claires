// 1. Récupérer le bouton et le tableau
const boutonHoraires = document.querySelector("#bouton-horaires");
const tableHoraires = document.querySelector("#table-horaires");
const boutonPanier = document.querySelector("#panier-bouton");

// 2. Écouter le clic sur le bouton
boutonHoraires.addEventListener("click", function () {
  tableHoraires.classList.toggle("cache");
  if(boutonHoraires.textContent === "Cacher les horaires"){
    boutonHoraires.textContent = "Voir les horaires";
  } else {
    boutonHoraires.textContent = "Cacher les horaires";
  }
});

let nombre = 0;
const compteur = document.querySelector("#compteur");
const boutons = document.querySelectorAll(".produit-bouton");

for (const bouton of boutons) {
  bouton.addEventListener("click", function () {
    nombre = nombre + 1;
    compteur.textContent = nombre;
  });
}

boutonPanier.addEventListener("click", function () {
  nombre = 0;
  compteur.textContent = nombre;
});
