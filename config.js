// Pindi Concept : liens d'achat et de téléchargement des pages du site.
const PAYMENT_LINK_URL = "https://buy.stripe.com/aFabJ1adj0qm8H00z67IY01";
const LIEN_TELECHARGEMENT = "https://github.com/cosinusmerita-create/pindiconcept/releases/tag/v1.9.0";

document.querySelectorAll("a[data-buy]").forEach((a) => {
  if (PAYMENT_LINK_URL.startsWith("http")) {
    a.href = PAYMENT_LINK_URL;
  }
});
document.querySelectorAll("a[data-download]").forEach((a) => {
  if (LIEN_TELECHARGEMENT.startsWith("http")) {
    a.href = LIEN_TELECHARGEMENT;
  }
});
const STORE_ACTIF = false;
const LIEN_STORE = "";
if (STORE_ACTIF) {
  document.querySelectorAll("a[data-store]").forEach((a) => {
    a.href = LIEN_STORE;
    a.style.display = "";
  });
  document.querySelectorAll("a[data-essai-principal]").forEach((a) => {
    a.href = LIEN_STORE;
  });
}
