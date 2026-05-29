# Presentación TFG — Stay-Sidekick

Presentación de **5 minutos** del TFG _Stay-Sidekick_ (CFGS DAW · Sergio Durán), construida con [reveal.js](https://revealjs.com) **vía CDN** (las dependencias de runtime no requieren instalación; solo el compilador SCSS).

- `index.html` — estructura de slides (19 diapositivas, 5 pilares como stacks verticales). **Sin estilos inline ni scripts embebidos.**
- `scss/` — fuente de estilos en **SCSS** con arquitectura **ITCSS + BEM** trasladada de [`stay-sidekick/frontend/src/styles/`](../../stay-sidekick/frontend/src/styles/) (un parcial por capa y componente). Se compila a `styles.css`.
- `styles.css` — **artefacto generado** por `pnpm run build:css`. No editar a mano.
- `js/` — lógica de arranque compartimentada en módulos ES (`main.js`, `reveal-config.js`, `mermaid-config.js`).
- `OUTLINE.md` — guion editorial: slide-a-slide, pilares cubiertos, tiempos.

> **Duración estimada:** ~5 minutos a ritmo de ~15-18 s por slide. Las _speaker notes_ (visibles con `S`) totalizan ~700 palabras.

## Compilar los estilos (SCSS → CSS)

Los estilos se escriben en `scss/` y se compilan a `styles.css` con [Sass](https://sass-lang.com). El gestor de paquetes es **pnpm**:

```bash
cd presentation
pnpm install          # instala sass + http-server (devDependencies)
pnpm run build:css    # scss/main.scss → styles.css (una vez)
pnpm run watch:css    # recompila al guardar
```

> `styles.css` está versionado para poder servir la presentación sin compilar (p. ej. en GitHub Pages), pero es un **artefacto generado**: edita siempre `scss/`, nunca `styles.css`.

## Ver la presentación en local

`index.html` referencia los CDNs de reveal.js, por lo que hay que servirla desde un servidor estático (no funciona con `file://` por las reglas CORS de los módulos).

### Opción A — pnpm (sirve y observa SCSS a la vez)

```bash
cd presentation
pnpm run dev          # compila, observa scss/ y levanta http-server en :8000
```

### Opción B — Python (viene preinstalado, sin compilar SCSS)

```bash
cd presentation
python -m http.server 8000
```

Y abrir [http://localhost:8000](http://localhost:8000).

### Opción C — Extensión _Live Server_ de VS Code

Clic derecho sobre `index.html` → _Open with Live Server_.

## Atajos de teclado útiles

| Tecla | Acción |
|------|--------|
| `→` / `Space` | Siguiente slide |
| `←` | Slide anterior |
| `S` | Abre la ventana de _speaker notes_ (guion) |
| `F` | Pantalla completa |
| `O` / `ESC` | Vista general (grid de todos los slides) |
| `B` | Pantalla en negro (pausa visual) |
| `?` | Lista completa de atajos |

La barra de progreso inferior y el contador `c/t` están activados.

## Desplegar en GitHub Pages

1. **Empujar la rama** (ya hecho si has clonado este repo):
   ```bash
   git push -u origin feat/tfg-presentation
   ```
2. **Fusionar a `main`** (o configurar Pages contra cualquier rama).
3. En GitHub → _Settings_ → _Pages_:
   - **Source:** `Deploy from a branch`.
   - **Branch:** `main` (o la rama deseada) · **Folder:** `/ (root)`.
4. Tras el primer despliegue, la presentación queda disponible en:
   ```
   https://<usuario>.github.io/<repo>/presentation/
   ```
   Para este repositorio: `https://sdurutr436.github.io/presentacion-staysidekick/presentation/`.

> Si prefieres servir la presentación en la raíz del sitio en lugar de `/presentation/`, mueve `index.html` un nivel arriba o configura un `index.html` en la raíz que redirija a `/presentation/`.

### Despliegue alternativo en Netlify / Vercel / Cloudflare Pages

Cualquier servicio de _static hosting_ sirve. Apunta la raíz de publicación a la carpeta `presentation/`.

## Estructura

```
presentation/
├── index.html              # Estructura de slides (sin estilos inline ni scripts embebidos)
├── scss/                   # Fuente de estilos · ITCSS espejo del SCSS del producto
│   ├── main.scss           #   punto de entrada (@use en orden de capas)
│   ├── settings/           #   _tokens.scss (custom properties --ss-*)
│   ├── generic/            #   _reveal-overrides.scss
│   ├── elements/           #   _base.scss (h1-h4, p, li, code…)
│   ├── layout/             #   _grid.scss
│   ├── components/         #   _kicker, _badge, _card, _stat, _title-block, _quote, _code
│   ├── utilities/          #   _utilities.scss
│   └── vendor/             #   _mermaid.scss
├── js/                     # Lógica compartimentada en módulos ES
│   ├── main.js             #   entrada: inicializa mermaid + reveal
│   ├── reveal-config.js    #   configuración de reveal.js
│   └── mermaid-config.js   #   tema corporativo de mermaid
├── styles.css              # Artefacto generado por build:css (no editar)
├── package.json            # Scripts pnpm: build:css / watch:css / serve / dev
├── OUTLINE.md              # Guion: orden de slides, pilares, tiempos
└── README.md               # Este fichero
```

## Notas técnicas

- **reveal.js 5.1.0** servido desde `cdn.jsdelivr.net`.
- Plugins activos: `RevealHighlight` (resaltado de código con Monokai), `RevealNotes` (vista de presentador con `S`) y **mermaid 10.9.1** (diagrama de la topología Docker).
- Tipografía **Archivo** (la misma del producto real) cargada desde Google Fonts.
- Paleta corporativa importada del SCSS del producto: `--background` `#2B2B2B`, `--card` `#333`, `--sidebar` `#212121`, `--border` `#4F4F4F`, acento ámbar `#EFE3BC` con foreground `#5D423A`.
- Reveal sobrescrito con `--r-main-font-size: 22px` para evitar el tamaño gigante por defecto (42 px).
- **Sin** `localStorage`: cumple el requisito de portabilidad en entornos restringidos.
- **Sin estilos inline**: toda la presentación va por clases BEM resueltas en `styles.css` (compilado desde `scss/`).
- **Sin scripts embebidos**: el arranque de mermaid y reveal vive en módulos ES bajo `js/`; el `index.html` solo enlaza `js/main.js`.
- Los `data-background-gradient` de la portada y el cierre son la **API nativa de reveal.js** para fondos de slide (atributos `data-`, no estilos CSS inline).
