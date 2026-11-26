// Vidéo de présentation (1.9.0) : boucle muette en lecture automatique, chargée seulement quand elle approche de
// l'écran ; le bouton « Activer le son » charge la version complète avec son, la lance depuis le début et affiche les
// contrôles (pause, volume, plein écran). Fichiers hébergés sur le site, aucune ressource externe.
document.querySelectorAll('[data-video]').forEach((bloc) => {
  const video = bloc.querySelector('video')
  const bouton = bloc.querySelector('[data-son]')
  if (!video || !bouton) return
  const reduit = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const chargerBoucle = () => {
    if (video.dataset.etat) return
    video.dataset.etat = 'boucle'
    video.src = video.dataset.boucle
    video.load()
    if (!reduit) video.play().catch(() => {})
  }
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entrees) => {
      if (entrees.some((e) => e.isIntersecting)) {
        chargerBoucle()
        obs.disconnect()
      }
    }, { rootMargin: '200px' })
    obs.observe(bloc)
  } else {
    chargerBoucle()
  }
  bouton.addEventListener('click', () => {
    video.dataset.etat = 'complete'
    video.loop = false
    video.muted = false
    video.controls = true
    video.src = video.dataset.complete
    video.load()
    video.play().catch(() => {})
    bouton.remove()
    video.focus()
  })
})
