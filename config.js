// ============================================================
//  Fichier GÉNÉRÉ par scripts/site-sync.mjs depuis electron/editeur.json et package.json : ne pas modifier à la main.
//  PAYMENT_LINK_URL : lien de paiement Stripe (mode réel). Tous les boutons « Acheter » l'utilisent.
//  LIEN_TELECHARGEMENT : page de la release des installateurs (installeur NSIS + version portable)
//  dans le dépôt public « pindiconcept ».
// ============================================================
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
// Microsoft Store (electron/editeur.json, section store) : désactivé tant que store.actif vaut false. Activé, le
// badge apparaît et le bouton principal « Essayer gratuitement 14 jours » mène au Store ; l'installeur classique reste
// proposé en lien secondaire.
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
