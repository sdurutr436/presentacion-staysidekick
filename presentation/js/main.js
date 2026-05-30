// =============================================================================
// ENTRADA · arranque de la presentación
// Inicializa Mermaid + Reveal y renderiza diagramas en cada slide.
// =============================================================================

import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.esm.min.mjs';
import { mermaidConfig } from './mermaid-config.js';
import { revealConfig } from './reveal-config.js';

mermaid.initialize(mermaidConfig);
Reveal.initialize(revealConfig);

const renderMermaid = async () => {
  const pending = document.querySelectorAll('pre.mermaid:not([data-processed])');
  if (pending.length) {
    await mermaid.run({ nodes: pending });
  }

  if (window.Reveal) Reveal.layout();
};

Reveal.on('ready', renderMermaid);
Reveal.on('slidechanged', renderMermaid);
