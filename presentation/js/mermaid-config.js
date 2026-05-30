// =============================================================================
// MERMAID · configuración de tema
// Paleta corporativa Stay-Sidekick — MODO CLARO (espejo de scss/settings/_tokens.scss).
// =============================================================================

export const mermaidConfig = {
  startOnLoad: false,
  theme: 'base',
  securityLevel: 'loose',
  fontFamily: 'Archivo, sans-serif',
  themeVariables: {
    fontFamily: 'Archivo, sans-serif',
    fontSize: '24px',
    background: 'transparent',

    primaryColor: '#ffffff',
    primaryTextColor: '#3a3a3a',
    primaryBorderColor: '#737373',

    secondaryColor: '#ffffff',
    secondaryTextColor: '#3a3a3a',
    secondaryBorderColor: '#737373',

    tertiaryColor: '#ffffff',
    tertiaryTextColor: '#3a3a3a',
    tertiaryBorderColor: '#737373',

    mainBkg: '#ffffff',
    nodeBorder: '#737373',
    clusterBkg: 'rgba(0, 0, 0, 0.02)',
    clusterBorder: '#737373',

    // Línea oscura para que se vea sobre fondo blanco (era #EFE3BC, invisible).
    lineColor: '#333333',
    textColor: '#3a3a3a',
    // Fondo claro de las etiquetas de arista (era #2B2B2B, oscuro y feo).
    edgeLabelBackground: '#ffffff',
  },
  flowchart: {
    curve: 'linear',
    useMaxWidth: false,
    htmlLabels: true,
    padding: 8,
    nodeSpacing: 300, // separación vertical entre filas (LR) → estira en alto
    rankSpacing: 70,  // separación horizontal entre columnas
  },
};
