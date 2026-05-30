// =============================================================================
// MERMAID · configuración de tema
// Paleta corporativa Stay-Sidekick — modo oscuro + acento ámbar fijo (#EFE3BC).
// Espejo de los tokens definidos en scss/settings/_tokens.scss.
// =============================================================================

export const mermaidConfig = {
  startOnLoad: false,
  theme: 'base',
  securityLevel: 'loose',
  fontFamily: 'Archivo, sans-serif',
  themeVariables: {
    fontFamily: 'Archivo, sans-serif',
    fontSize: '13px',
    background: 'transparent',

    primaryColor: '#EFE3BC',
    primaryTextColor: '#5D423A',
    primaryBorderColor: '#EFE3BC',

    secondaryColor: '#333333',
    secondaryTextColor: '#DCDCDC',
    secondaryBorderColor: '#4F4F4F',

    tertiaryColor: '#212121',
    tertiaryTextColor: '#DCDCDC',
    tertiaryBorderColor: '#4F4F4F',

    mainBkg: '#333333',
    nodeBorder: '#4F4F4F',
    clusterBkg: 'rgba(239, 227, 188, 0.03)',
    clusterBorder: '#4F4F4F',

    lineColor: '#EFE3BC',
    textColor: '#DCDCDC',
    edgeLabelBackground: '#2B2B2B',
  },
  flowchart: {
    curve: 'linear',
    useMaxWidth: true,
    htmlLabels: true,
    padding: 10,
  },
};
