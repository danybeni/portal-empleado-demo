// Applies the saved theme before the first paint (no white flash in dark mode).
// Kept in sync with src/lib/tema.ts. External file because the CSP forbids inline scripts.
;(function () {
  var preferencia = 'sistema'
  try {
    preferencia = localStorage.getItem('portal:tema') || 'sistema'
  } catch {
    // storage blocked: automatic theme
  }
  var oscuro =
    preferencia === 'oscuro' ||
    (preferencia !== 'claro' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.dataset.tema = oscuro ? 'oscuro' : 'claro'
  var meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', oscuro ? '#0F1B22' : '#0A4059')
})()
