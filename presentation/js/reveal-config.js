// =============================================================================
// REVEAL · configuración de la presentación
// Los plugins (RevealHighlight, RevealNotes) los exponen como globales los
// scripts clásicos cargados antes que este módulo en index.html.
// =============================================================================

export const revealConfig = {
  hash: true,
  slideNumber: 'c/t',
  progress: true,
  controls: true,
  controlsTutorial: false,
  center: false,
  transition: 'slide',
  backgroundTransition: 'fade',
  plugins: [RevealHighlight, RevealNotes],
};
